import { useEffect, useRef } from 'react';

/**
 * GlowingGrid - Animated Glowing Grid Background
 * Creates a cyberpunk-style grid with glowing lines and pulses
 */
const GlowingGrid = ({
  gridSize = 50,
  lineColor = '#00ffff',
  glowColor = '#ff00ff',
  lineWidth = 1,
  glowIntensity = 0.8,
  pulseSpeed = 1,
  perspective = true,
  className = ''
}) => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 0, g: 255, b: 255 };
    };

    const lineRgb = hexToRgb(lineColor);
    const glowRgb = hexToRgb(glowColor);

    const drawPerspectiveGrid = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const vanishingY = canvas.height * 0.3;
      const horizonY = canvas.height * 0.5;

      // Draw horizontal lines with perspective
      for (let i = 0; i <= 20; i++) {
        const y = horizonY + (i * gridSize);
        if (y > canvas.height) continue;

        const depth = (y - horizonY) / canvas.height;
        const pulse = Math.sin(time * pulseSpeed + i * 0.5) * 0.5 + 0.5;
        const opacity = (0.3 + pulse * 0.4) * glowIntensity;

        // Glow effect
        ctx.shadowBlur = 20 * glowIntensity;
        ctx.shadowColor = `rgba(${glowRgb.r}, ${glowRgb.g}, ${glowRgb.b}, ${opacity})`;

        ctx.strokeStyle = `rgba(${lineRgb.r}, ${lineRgb.g}, ${lineRgb.b}, ${opacity})`;
        ctx.lineWidth = lineWidth + (pulse * 2);

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw vertical lines with perspective
      const numVerticalLines = Math.ceil(canvas.width / gridSize);
      for (let i = -numVerticalLines; i <= numVerticalLines; i++) {
        const x = canvas.width / 2 + (i * gridSize);
        const pulse = Math.sin(time * pulseSpeed + i * 0.3) * 0.5 + 0.5;
        const opacity = (0.3 + pulse * 0.4) * glowIntensity;

        ctx.shadowBlur = 20 * glowIntensity;
        ctx.shadowColor = `rgba(${glowRgb.r}, ${glowRgb.g}, ${glowRgb.b}, ${opacity})`;

        ctx.strokeStyle = `rgba(${lineRgb.r}, ${lineRgb.g}, ${lineRgb.b}, ${opacity})`;
        ctx.lineWidth = lineWidth + (pulse * 2);

        ctx.beginPath();
        ctx.moveTo(x, horizonY);
        
        // Perspective convergence
        const convergenceX = canvas.width / 2 + (i * gridSize * 0.1);
        ctx.lineTo(convergenceX, vanishingY);
        ctx.stroke();
      }

      // Draw glowing dots at intersections
      for (let i = 0; i <= 20; i++) {
        const y = horizonY + (i * gridSize);
        if (y > canvas.height) continue;

        for (let j = -numVerticalLines; j <= numVerticalLines; j++) {
          const x = canvas.width / 2 + (j * gridSize);
          const pulse = Math.sin(time * pulseSpeed * 2 + i * 0.5 + j * 0.3) * 0.5 + 0.5;
          
          if (pulse > 0.7) {
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, 10);
            gradient.addColorStop(0, `rgba(${glowRgb.r}, ${glowRgb.g}, ${glowRgb.b}, ${pulse})`);
            gradient.addColorStop(1, 'transparent');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, 10, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      ctx.shadowBlur = 0;
    };

    const drawFlatGrid = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        const pulse = Math.sin(time * pulseSpeed + y * 0.01) * 0.5 + 0.5;
        const opacity = (0.3 + pulse * 0.4) * glowIntensity;

        ctx.shadowBlur = 15 * glowIntensity;
        ctx.shadowColor = `rgba(${glowRgb.r}, ${glowRgb.g}, ${glowRgb.b}, ${opacity})`;

        ctx.strokeStyle = `rgba(${lineRgb.r}, ${lineRgb.g}, ${lineRgb.b}, ${opacity})`;
        ctx.lineWidth = lineWidth + (pulse * 1.5);

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        const pulse = Math.sin(time * pulseSpeed + x * 0.01) * 0.5 + 0.5;
        const opacity = (0.3 + pulse * 0.4) * glowIntensity;

        ctx.shadowBlur = 15 * glowIntensity;
        ctx.shadowColor = `rgba(${glowRgb.r}, ${glowRgb.g}, ${glowRgb.b}, ${opacity})`;

        ctx.strokeStyle = `rgba(${lineRgb.r}, ${lineRgb.g}, ${lineRgb.b}, ${opacity})`;
        ctx.lineWidth = lineWidth + (pulse * 1.5);

        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      ctx.shadowBlur = 0;
    };

    const animate = () => {
      timeRef.current += 0.02;

      if (perspective) {
        drawPerspectiveGrid(timeRef.current);
      } else {
        drawFlatGrid(timeRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [gridSize, lineColor, glowColor, lineWidth, glowIntensity, pulseSpeed, perspective]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`}
    />
  );
};

export default GlowingGrid;
