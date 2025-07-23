import React from 'react';
import { Badge } from '@/components/ui/badge';
import { RiskLevel } from '@/types';
import { RISK_CONFIG } from '@/lib/constants';

interface RiskBadgeProps {
  risk: RiskLevel;
  className?: string;
}

export const RiskBadge: React.FC<RiskBadgeProps> = ({ risk, className }) => {
  const config = RISK_CONFIG[risk];
  
  if (!config) {
    return (
      <Badge variant="outline" className={className}>
        未知风险
      </Badge>
    );
  }

  const getVariant = (risk: RiskLevel) => {
    switch (risk) {
      case RiskLevel.LOW:
        return 'success' as const;
      case RiskLevel.MEDIUM:
        return 'warning' as const;
      case RiskLevel.HIGH:
        return 'danger' as const;
      case RiskLevel.VERY_HIGH:
        return 'destructive' as const;
      default:
        return 'outline' as const;
    }
  };

  return (
    <Badge 
      variant={getVariant(risk)} 
      className={className}
      title={config.description}
    >
      {risk}
    </Badge>
  );
};