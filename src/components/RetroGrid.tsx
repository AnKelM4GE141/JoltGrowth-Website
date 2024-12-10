import React from 'react';
import { GridCanvas } from './GridCanvas';

export function RetroGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-fuchsia-900/30 to-transparent z-10" />
      <GridCanvas />
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(10, 10, 44, 0.5) 75%, #0a0a2c 100%)',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}