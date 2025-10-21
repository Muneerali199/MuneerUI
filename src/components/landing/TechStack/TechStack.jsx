import { useEffect, useRef } from 'react';
import './TechStack.css';
import { FaReact, FaJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiFramer, SiVite } from 'react-icons/si';

const TechStack = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const cards = container.querySelectorAll('.tech-card');
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardX = cardRect.left - rect.left + cardRect.width / 2;
        const cardY = cardRect.top - rect.top + cardRect.height / 2;

        const distance = Math.sqrt(Math.pow(x - cardX, 2) + Math.pow(y - cardY, 2));
        const maxDistance = 400;

        if (distance < maxDistance) {
          const intensity = 1 - distance / maxDistance;
          card.style.setProperty('--glow-intensity', intensity);
        } else {
          card.style.setProperty('--glow-intensity', 0);
        }
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const technologies = [
    { icon: <FaReact />, name: 'React', color: '#61dafb' },
    { icon: <FaJs />, name: 'JavaScript', color: '#f7df1e' },
    { icon: <SiTypescript />, name: 'TypeScript', color: '#3178c6' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: '#06b6d4' },
    { icon: <SiFramer />, name: 'Framer Motion', color: '#00ffff' },
    { icon: <SiVite />, name: 'Vite', color: '#646cff' },
  ];

  return (
    <section className="tech-stack-section">
      <div className="tech-stack-container" ref={containerRef}>
        <div className="tech-stack-header">
          <h2 className="tech-stack-title">Built With Modern Technologies</h2>
          <p className="tech-stack-subtitle">
            Powered by the best tools in the ecosystem
          </p>
        </div>

        <div className="tech-stack-grid">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="tech-card"
              style={{ '--tech-color': tech.color, animationDelay: `${index * 0.1}s` }}
            >
              <div className="tech-card-glow"></div>
              <div className="tech-icon">{tech.icon}</div>
              <div className="tech-name">{tech.name}</div>
              <div className="tech-border"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
