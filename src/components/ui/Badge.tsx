import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'neutral' | 'outline' | 'pill';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'secondary',
  className = '',
  icon,
}) => {
  let baseStyle = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold';

  switch (variant) {
    case 'primary':
      baseStyle = 'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-primary-fixed/30 text-primary text-[11px] font-bold uppercase';
      break;
    case 'secondary':
      baseStyle = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container/30 text-on-secondary-fixed text-xs font-semibold';
      break;
    case 'neutral':
      baseStyle = 'inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant text-[10px] font-semibold';
      break;
    case 'outline':
      baseStyle = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest text-on-surface-variant text-xs font-medium border border-outline-variant/30';
      break;
    case 'pill':
      baseStyle = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/40 text-primary text-xs font-semibold';
      break;
  }

  return (
    <span className={`${baseStyle} ${className}`}>
      {icon}
      {children}
    </span>
  );
};

