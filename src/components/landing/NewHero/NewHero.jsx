import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './NewHero.css';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const NewHero = () => {
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isMobile) return; // Skip canvas on mobile for performance

    const ctx = canvas.getContext('2d', { 
      alpha: true,
      desynchronized: true // Better performance
    });
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = window.innerWidth < 1024 ? 40 : 60; // Further reduced for better performance

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2;
        this.opacity = Math.random() * 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 0, ${this.opacity * 0.6})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      // Draw connections - optimized
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) { // Reduced connection distance for performance
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 215, 0, ${0.15 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isMobile]);

  return (
    <section className="new-hero-section">
      {!isMobile && <canvas ref={canvasRef} className="hero-canvas" />}
      
      {/* Gradient Orbs */}
      <div className="gradient-orb orb-1" />
      <div className="gradient-orb orb-2" />
      <div className="gradient-orb orb-3" />

      {/* Navigation */}
      <nav className="hero-nav">
        <Logo />
        <div className="nav-links">
          <Link to="/animations/blob-cursor" className="nav-link">Components</Link>
          <Link to="/showcase" className="nav-link">Showcase</Link>
          <a href="https://github.com/Muneerali199/MuneerUI" target="_blank" rel="noopener noreferrer" className="nav-link">
            <FaGithub />
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="hero-content-wrapper">
        <div className="hero-badge">
          <HiSparkles className="badge-icon" />
          <span>110+ Premium Components</span>
        </div>

        <h1 className="hero-main-title">
          Build Stunning
          <br />
          <span className="gradient-text">Modern Web Apps</span>
        </h1>

        <p className="hero-description">
          Production-ready React components with beautiful animations.
          <br />
          Built with TypeScript, Tailwind CSS & Framer Motion.
        </p>

        <div className="hero-cta-buttons">
          <Link to="/animations/blob-cursor" className="cta-button primary">
            <HiSparkles className="button-icon-left" />
            <span className="button-text">Browse Components</span>
            <FaArrowRight className="button-icon-right" />
          </Link>
          <a 
            href="https://github.com/Muneerali199/MuneerUI" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button secondary"
          >
            <FaGithub className="button-icon-left" />
            <span className="button-text">Star on GitHub</span>
            <FaArrowRight className="button-icon-right" />
          </a>
        </div>

        {/* Quick Stats */}
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-value">110+</div>
            <div className="stat-label">Components</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <div className="stat-value">440+</div>
            <div className="stat-label">Variants</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <div className="stat-value">100%</div>
            <div className="stat-label">Free</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="scroll-indicator"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          });
        }}
      >
        <div className="scroll-line" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default NewHero;
