import React, { useEffect, useRef } from 'react';
import { generateWavePoints } from '../utils/gridAnimations';

export function GridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const scale = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * scale;
      canvas.height = window.innerHeight * scale;
      ctx.scale(scale, scale);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.fillStyle = 'rgba(10, 10, 44, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const points = generateWavePoints(canvas.width, canvas.height, time);
      
      // Enhanced grid lines with stronger perspective
      ctx.strokeStyle = 'rgba(180, 120, 255, 0.15)';
      ctx.lineWidth = 1;

      // Horizontal lines with enhanced perspective
      for (let z = 0; z <= canvas.height * 2; z += 20) {
        ctx.beginPath();
        points.filter(p => p[2] === z).forEach(([x, y], i) => {
          const screenY = y + (z * 1.2) + canvas.height * 0.2;
          const perspective = 1 - (z / (canvas.height * 2)) * 0.85; // Enhanced perspective effect
          const screenX = x * perspective + canvas.width * (1 - perspective) / 2;
          
          if (i === 0) {
            ctx.moveTo(screenX, screenY);
          } else {
            ctx.lineTo(screenX, screenY);
          }
        });
        ctx.stroke();
      }

      // Vertical lines with enhanced perspective
      const verticalLineSpacing = 20;
      const totalWidth = canvas.width * 3;
      for (let x = -totalWidth/2; x <= totalWidth * 1.5; x += verticalLineSpacing) {
        ctx.beginPath();
        points.filter(p => p[0] === x).forEach(([_, y, z], i) => {
          const screenY = y + (z * 1.2) + canvas.height * 0.2;
          const perspective = 1 - (z / (canvas.height * 2)) * 0.85;
          const screenX = x * perspective + canvas.width * (1 - perspective) / 2;
          
          if (i === 0) {
            ctx.moveTo(screenX, screenY);
          } else {
            ctx.lineTo(screenX, screenY);
          }
        });
        ctx.stroke();
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ 
        background: 'linear-gradient(to bottom, #0a0a2c, #1a1a4f)',
        imageRendering: 'pixelated'
      }}
    />
  );
}