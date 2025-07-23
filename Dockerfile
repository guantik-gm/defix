# 使用官方 Node.js 镜像作为基础镜像
FROM node:18-alpine AS base

# 安装依赖阶段
FROM base AS deps
# 检查 https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
# 了解为什么可能需要 libc6-compat
RUN apk add --no-cache libc6-compat
WORKDIR /app

# 安装依赖基于首选包管理器
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "锁定文件未找到。" && exit 1; \
  fi

# 构建阶段
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 下一个构建时不收集遥测数据
ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build

# 如果使用 npm 取消注释下面一行
# RUN npm run build

# 生产镜像，复制所有文件并运行 next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# 下一个构建时不收集遥测数据
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# 设置正确的权限预构建资产
# 利用输出跟踪减少图像大小
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
# 设置主机名为 localhost
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]