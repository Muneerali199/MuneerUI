import { useEffect, useRef } from 'react';

/**
 * StarField - Animated Starfield Background
 * Creates a parallax starfield with twinkling stars
 */
const StarField = ({
  starCount = 200,
  layers = 3,
  speed = 1,
  twinkle = true,
  shootingStars = true,
  shootingStarFrequency = 0.002,
  colors = ['#FFFFFF', '#FFE9A0', '#B0E0E6', '#FFB6C1'],
  className = ''
}) => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    class Star {
      constructor(layer) {
        this.layer = layer;
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * (3 / this.layer) + 0.5;
        this.speedX = (Math.random() - 0.5) * speed * (1 / this.layer);
        this.speedY = Math.random() * speed * (1 / this.layer) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.5;
        this.twinkleSpeed = Math.random() * 0.05 + 0.01;
        this.twinklePhase = Math.random() * Math.PI * 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        if (twinkle) {
          this.twinklePhase += this.twinkleSpeed;
        }
      }

      draw() {
        const twinkleOpacity = twinkle 
          ? this.opacity * (0.5 + Math.sin(this.twinklePhase) * 0.5)
          : this.opacity;

        // Glow effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 3
        );
        gradient.addColorStop(0, this.color.replace(')', `, ${twinkleOpacity})`).replace('rgb', 'rgba'));
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = this.color.replace(')', `, ${twinkleOpacity})`).replace('rgb', 'rgba');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class ShootingStar {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 0.5;
        this.length = Math.random() * 80 + 40;
        this.speed = Math.random() * 10 + 10;
        this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.5;
        this.opacity = 1;
        this.fadeSpeed = 0.02;
        this.active = true;
      }

      update() {
        if (!this.active) return;

        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.opacity -= this.fadeSpeed;

        if (this.opacity <= 0 || this.x > canvas.width || this.y > canvas.height) {
          this.active = false;
        }
      }

      draw() {
        if (!this.active) return;

        ctx.save();
        
        const gradient = ctx.createLinearGradient(
          this.x, this.y,
          this.x - Math.cos(this.angle) * this.length,
          this.y - Math.sin(this.angle) * this.length
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(255, 255, 200, ${this.opacity * 0.5})`);
        gradient.addColorStop(1, 'transparent');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
          this.x - Math.cos(this.angle) * this.length,
          this.y - Math.sin(this.angle) * this.length
        );
        ctx.stroke();

        ctx.restore();
      }
    }

    const stars = [];
    const starsPerLayer = Math.floor(starCount / layers);
    
    for (let layer = 1; layer <= layers; layer++) {
      for (let i = 0; i < starsPerLayer; i++) {
        stars.push(new Star(layer));
      }
    }

    const shootingStarsList = [];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      stars.forEach(star => {
        star.update();
        star.draw();
      });

      // Shooting stars
      if (shootingStars) {
        // Create new shooting stars randomly
        if (Math.random() < shootingStarFrequency) {
          shootingStarsList.push(new ShootingStar());
        }

        // Update and draw shooting stars
        shootingStarsList.forEach((star, index) => {
          star.update();
          star.draw();
          
          if (!star.active) {
            shootingStarsList.splice(index, 1);
          }
        });
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
  }, [starCount, layers, speed, twinkle, shootingStars, shootingStarFrequency, colors]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`}
    />
  );
};

export default StarField;
