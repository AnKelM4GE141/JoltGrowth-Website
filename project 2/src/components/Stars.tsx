import React from 'react';

export function Stars() {
  return (
    <div className="absolute inset-0">
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(1px 1px at ${Array.from({ length: 50 }, () => 
            `${Math.random() * 100}% ${Math.random() * 100}%`
          ).join(', ')}, 
          rgba(255, 255, 255, 0.8) 2px, 
          transparent 0)`,
        }}
      />
    </div>
  );
}