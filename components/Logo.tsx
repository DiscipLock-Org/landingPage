'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  dark?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  dark = false,
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'h-12 w-12',
    md: 'h-20 w-20',
    lg: 'h-32 w-32',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`relative ${sizeClasses[size]} flex-shrink-0`}>
        <Image
          src="/logo.png"
          alt="Disciplock Logo"
          width={size === 'sm' ? 48 : size === 'md' ? 80 : 120}
          height={size === 'sm' ? 48 : size === 'md' ? 80 : 120}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};
