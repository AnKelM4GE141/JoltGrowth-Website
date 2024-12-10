import React from 'react';

export function RetroSun() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div 
        className="absolute h-32 w-32 rounded-full bg-gradient-to-r from-white via-pink-200 to-fuchsia-300"
        style={{
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: `
            0 0 40px rgba(255, 255, 255, 0.6),
            0 0 80px rgba(255, 192, 203, 0.4),
            0 0 120px rgba(255, 0, 255, 0.3)
          `,
        }}
      />
    </div>
  );
}