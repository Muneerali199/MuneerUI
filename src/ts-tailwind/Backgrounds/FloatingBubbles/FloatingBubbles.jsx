import { useEffect, useRef } from 'react';

/**
 * FloatingBubbles - Elegant Floating Bubbles Effect
 * Creates smooth, floating bubbles with glassmorphism style
 */
const FloatingBubbles = ({
  bubbleCount = 30,
  minSize = 20,
  maxSize = 80,
  colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'],
  speed = 0.5,
  opacity = 0.6,
  blur = 2,
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

    class Bubble {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = Math.random() * (maxSize - minSize) + minSize;
        this.speedY = -(Math.random() * speed + 0.5);
        this.speedX = (Math.random() - 0.5) * speed * 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.02 + 0.01;
      }

      update(mouseX, mouseY) {
        this.y += this.speedY;
        this.x += this.speedX;
        this.wobble += this.wobbleSpeed;
        
        // Wobble effect
        this.x += Math.sin(this.wobble) * 0.5;

        // Mouse interaction - bubbles avoid mouse
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDistance = 100;

        if (distance < minDistance) {
          const angle = Math.atan2(dy, dx);
          const force = (minDistance - distance) / minDistance;
          this.x += Math.cos(angle) * force * 2;
          this.y += Math.sin(angle) * force * 2;
        }

        // Boundary check
        if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.reset();
      }

      draw() {
        ctx.save();

        // Main bubble with gradient
        const gradient = ctx.createRadialGradient(
          this.x - this.size * 0.3,
          this.y - this.size * 0.3,
          this.size * 0.1,
          this.x,
          this.y,
          this.size
        );

        // Parse color and add alpha
        const addAlpha = (color, alpha) => {
          if (color.startsWith('#')) {
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);
            return `rgba(${r}, ${g}, ${b}, ${alpha})`;
          }
          return color;
        };

        gradient.addColorStop(0, addAlpha(this.color, opacity * 0.8));
        gradient.addColorStop(0.5, addAlpha(this.color, opacity * 0.5));
        gradient.addColorStop(1, addAlpha(this.color, opacity * 0.2));

        ctx.fillStyle = gradient;
        ctx.filter = `blur(${blur}px)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Highlight
        ctx.filter = 'none';
        const highlightGradient = ctx.createRadialGradient(
          this.x - this.size * 0.4,
          this.y - this.size * 0.4,
          0,
          this.x - this.size * 0.4,
          this.y - this.size * 0.4,
          this.size * 0.5
        );
        highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
        highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = highlightGradient;
        ctx.beginPath();
        ctx.arc(this.x - this.size * 0.3, this.y - this.size * 0.3, this.size * 0.4, 0, Math.PI * 2);
        ctx.fill();

        // Rim light
        ctx.strokeStyle = addAlpha(this.color, opacity * 0.3);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size - 1, 0, Math.PI * 2);
        ctx.stroke();

        ctx.restore();
      }
    }

    const bubbles = [];
    for (let i = 0; i < bubbleCount; i++) {
      const bubble = new Bubble();
      bubble.y = Math.random() * canvas.height;
      bubbles.push(bubble);
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach(bubble => {
        bubble.update(mouseRef.current.x, mouseRef.current.y);
        bubble.draw();
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
  }, [bubbleCount, minSize, maxSize, colors, speed, opacity, blur]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 w-full h-full pointer-events-auto z-0 ${className}`}
    />
  );
};

export default FloatingBubbles;
