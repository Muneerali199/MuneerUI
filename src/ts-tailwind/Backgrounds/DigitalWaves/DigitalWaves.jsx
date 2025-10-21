import { useEffect, useRef } from 'react';

/**
 * DigitalWaves - Animated Digital Waveform Effect
 * Creates flowing digital waves with frequency visualization style
 */
const DigitalWaves = ({
  waveCount = 3,
  colors = ['#FF006E', '#8338EC', '#3A86FF'],
  amplitude = 50,
  frequency = 0.02,
  speed = 0.03,
  lineWidth = 3,
  glow = true,
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

    const centerY = canvas.height / 2;

    class Wave {
      constructor(index) {
        this.index = index;
        this.color = colors[index % colors.length];
        this.offset = (index * Math.PI * 2) / waveCount;
        this.amplitude = amplitude * (1 + index * 0.2);
        this.yPosition = centerY + (index - waveCount / 2) * 60;
      }

      draw(time) {
        ctx.save();

        if (glow) {
          ctx.shadowBlur = 20;
          ctx.shadowColor = this.color;
        }

        ctx.strokeStyle = this.color;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.beginPath();

        for (let x = 0; x <= canvas.width; x += 2) {
          // Multiple sine waves for complex pattern
          const y1 = Math.sin(x * frequency + time + this.offset) * this.amplitude;
          const y2 = Math.sin(x * frequency * 2 + time * 1.5 + this.offset) * (this.amplitude * 0.5);
          const y3 = Math.sin(x * frequency * 0.5 + time * 0.5 + this.offset) * (this.amplitude * 0.3);
          
          const y = this.yPosition + y1 + y2 + y3;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();

        // Add dots at peaks
        for (let x = 0; x <= canvas.width; x += 20) {
          const y1 = Math.sin(x * frequency + time + this.offset) * this.amplitude;
          const y2 = Math.sin(x * frequency * 2 + time * 1.5 + this.offset) * (this.amplitude * 0.5);
          const y3 = Math.sin(x * frequency * 0.5 + time * 0.5 + this.offset) * (this.amplitude * 0.3);
          const y = this.yPosition + y1 + y2 + y3;

          const intensity = Math.abs(Math.sin(x * frequency + time + this.offset));
          
          if (intensity > 0.7) {
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
            gradient.addColorStop(0, this.color);
            gradient.addColorStop(1, 'transparent');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        ctx.restore();
      }
    }

    const waves = [];
    for (let i = 0; i < waveCount; i++) {
      waves.push(new Wave(i));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      timeRef.current += speed;

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
  }, [waveCount, colors, amplitude, frequency, speed, lineWidth, glow]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`}
    />
  );
};

export default DigitalWaves;
