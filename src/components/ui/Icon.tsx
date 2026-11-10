import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  fill?: boolean;
  style?: React.CSSProperties;
}

export const Icon: React.FC<IconProps> = ({ name, className = '', fill = false, style = {} }) => {
  return (
    <span
      className={`material-symbols-outlined select-none inline-flex items-center justify-center leading-none ${className}`}
      style={{
        fontVariationSettings: fill ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
        ...style,
      }}
    >
      {name}
    </span>
  );
};

