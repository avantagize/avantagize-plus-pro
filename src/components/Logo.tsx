import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <path 
        d="M20 75 L35 45 L50 75 L65 30 L80 60 L95 25 L80 25 L65 55 L50 25 L35 70 L20 40 L5 75 Z" 
        fill="url(#logoGradient)"
        stroke="none"
      />
    </svg>
  );
};