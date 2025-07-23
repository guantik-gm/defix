import { AppProps } from 'next/app';
import Head from 'next/head';
import { GoogleAnalytics, useGoogleAnalytics } from '@/lib/analytics';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  // 初始化Google Analytics
  useGoogleAnalytics();

  return (
    <>
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Web3 Wallet Compatibility Fix */}
        <script src="/wallet-fix.js" />
        
        {/* Google Analytics */}
        <GoogleAnalytics />
        
        {/* Google Search Console验证 */}
        {process.env.NEXT_PUBLIC_GSC_VERIFICATION && (
          <meta 
            name="google-site-verification" 
            content={process.env.NEXT_PUBLIC_GSC_VERIFICATION} 
          />
        )}
      </Head>
      
      <Component {...pageProps} />
    </>
  );
}