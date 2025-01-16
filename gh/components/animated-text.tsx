"use client"

import { useState, useEffect } from 'react';

const AnimatedGradientText = ({ 
  children, 
  className = '',
  as = 'h1' // Default to h1 if not specified
}: any) => {
  const [gradientPosition, setGradientPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPosition(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const Component = as;

  return (
    <Component 
      className={`
        font-bold 
        tracking-tight 
        mb-4 
        bg-clip-text 
        text-transparent 
        relative 
        animate-gradient
        ${className}
      `}
      style={{
        backgroundImage: 'linear-gradient(90deg, #3b82f6, #a855f7, #3b82f6)',
        backgroundSize: '200% 100%',
        animation: 'gradient 8s linear infinite'
      }}
    >
      {children}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </Component>
  );
};

export default AnimatedGradientText;