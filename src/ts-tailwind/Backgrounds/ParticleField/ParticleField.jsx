import { useEffect, useRef } from 'react';

/**
 * ParticleField - 3D Particle Field Effect
 * Creates a depth-based particle system with perspective
 */
const ParticleField = ({
  particleCount = 200,
  colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'],
  speed = 1,
  rotationSpeed = 0.001,
  className = ''
}) => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    class Particle {
      constructor() {
        this.reset();
        this.z = Math.random() * 2000;
      }

      reset() {
        this.x = (Math.random() - 0.5) * 2000;
        this.y = (Math.random() - 0.5) * 2000;
        this.z = 2000;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.baseSize = Math.random() * 2 + 1;
      }

      update(mouseX, mouseY) {
        this.z -= speed * 2;

        if (this.z <= 0) {
          this.reset();
        }

        // Mouse interaction
        const dx = mouseX - centerX;
        const dy = mouseY - centerY;
        this.x += dx * rotationSpeed;
        this.y += dy * rotationSpeed;
      }

      draw() {
        const scale = 1000 / this.z;
        const x2d = this.x * scale + centerX;
        const y2d = this.y * scale + centerY;
        const size = this.baseSize * scale;

        if (x2d < 0 || x2d > canvas.width || y2d < 0 || y2d > canvas.height) {
          return;
        }

        const opacity = 1 - this.z / 2000;

        // Glow effect
        const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, size * 3);
        gradient.addColorStop(0, this.color.replace(')', `, ${opacity})`).replace('rgb', 'rgba'));
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x2d, y2d, size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core particle
        ctx.fillStyle = this.color.replace(')', `, ${opacity})`).replace('rgb', 'rgba');
        ctx.beginPath();
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
        ctx.fill();

        // Trail effect
        if (opacity > 0.5) {
          ctx.strokeStyle = this.color.replace(')', `, ${opacity * 0.3})`).replace('rgb', 'rgba');
          ctx.lineWidth = size * 0.5;
          ctx.beginPath();
          ctx.moveTo(x2d, y2d);
          const trailZ = this.z + 50;
          const trailScale = 1000 / trailZ;
          const trailX = this.x * trailScale + centerX;
          const trailY = this.y * trailScale + centerY;
          ctx.lineTo(trailX, trailY);
          ctx.stroke();
        }
      }
    }

    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Sort particles by z-index for proper depth rendering
      particles.sort((a, b) => b.z - a.z);

      particles.forEach(particle => {
        particle.update(mouseRef.current.x, mouseRef.current.y);
        particle.draw();
      });

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
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [particleCount, colors, speed, rotationSpeed]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 w-full h-full pointer-events-auto z-0 ${className}`}
    />
  );
};

export default ParticleField;
