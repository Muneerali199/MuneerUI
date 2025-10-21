import { useEffect, useRef } from 'react';

/**
 * AuroraWaves - Dynamic Aurora-like Wave Effect
 * Creates flowing, colorful waves reminiscent of the northern lights
 */
const AuroraWaves = ({
  colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'],
  waveCount = 5,
  speed = 0.5,
  opacity = 0.6,
  blur = 40,
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

    class Wave {
      constructor(index) {
        this.index = index;
        this.amplitude = 50 + Math.random() * 50;
        this.frequency = 0.002 + Math.random() * 0.001;
        this.phase = Math.random() * Math.PI * 2;
        this.speed = speed * (0.5 + Math.random() * 0.5);
        this.yOffset = (canvas.height / waveCount) * index;
        this.color = colors[index % colors.length];
      }

      draw(time) {
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.filter = `blur(${blur}px)`;

        const gradient = ctx.createLinearGradient(0, this.yOffset, 0, this.yOffset + 200);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);

        for (let x = 0; x <= canvas.width; x += 5) {
          const y = this.yOffset + 
            Math.sin(x * this.frequency + time * this.speed + this.phase) * this.amplitude +
            Math.sin(x * this.frequency * 2 + time * this.speed * 1.5) * (this.amplitude * 0.5);
          
          if (x === 0) {
            ctx.lineTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }

    const waves = [];
    for (let i = 0; i < waveCount; i++) {
      waves.push(new Wave(i));
    }

    const animate = () => {
      timeRef.current += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      waves.forEach(wave => wave.draw(timeRef.current));

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
  }, [colors, waveCount, speed, opacity, blur]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`}
    />
  );
};

export default AuroraWaves;
