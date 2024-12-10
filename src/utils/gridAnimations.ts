export const generateWavePoints = (width: number, height: number, time: number) => {
  const points: [number, number][] = [];
  const frequency = 0.008; // Reduced frequency for wider waves
  const amplitude = 40; // Increased amplitude for more dramatic effect
  const gridSize = 20; // Reduced grid size for more lines
  
  // Extend the grid beyond the viewport
  const extendedWidth = width * 2;
  const extendedHeight = height * 2;
  
  for (let x = -extendedWidth/2; x <= extendedWidth * 1.5; x += gridSize) {
    for (let z = 0; z <= extendedHeight; z += gridSize) {
      const y = Math.sin(x * frequency + time) * Math.cos(z * frequency + time) * amplitude;
      points.push([x, y, z]);
    }
  }
  
  return points;
};