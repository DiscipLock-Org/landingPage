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
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`relative ${sizeClasses[size]} flex-shrink-0`}>
        <Image
          src="/logo.png"
          alt="Disciplock Logo"
          width={size === 'sm' ? 32 : size === 'md' ? 48 : 64}
          height={size === 'sm' ? 32 : size === 'md' ? 48 : 64}
          className="object-contain"
          priority
        />
      </div>
      <span className={`font-bold ${textSizes[size]} ${dark ? 'text-white' : 'bg-gradient-to-r from-blue-600 via-blue-700 to-slate-700 bg-clip-text text-transparent'}`}>
        Disciplock
      </span>
    </div>
  );
};
