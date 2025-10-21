import { useState, useRef, useEffect } from 'react';
import './FeaturesShowcase.css';
import { FaCode, FaPalette, FaBolt, FaRocket, FaMobile, FaLayerGroup } from 'react-icons/fa';

const FeaturesShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef(null);

  const features = [
    {
      icon: <FaCode />,
      title: 'Clean Code',
      description: 'Production-ready code with TypeScript support. Copy, paste, and customize with ease.',
      color: '#3B82F6',
    },
    {
      icon: <FaPalette />,
      title: 'Beautiful Design',
      description: 'Stunning animations and modern design patterns that make your apps stand out.',
      color: '#6366F1',
    },
    {
      icon: <FaBolt />,
      title: 'High Performance',
      description: 'Optimized for speed with efficient rendering and minimal bundle size.',
      color: '#0EA5E9',
    },
    {
      icon: <FaRocket />,
      title: 'Easy Integration',
      description: 'Seamlessly integrate into your existing React projects with zero configuration.',
      color: '#8B5CF6',
    },
    {
      icon: <FaMobile />,
      title: 'Fully Responsive',
      description: 'Works flawlessly across all devices and screen sizes out of the box.',
      color: '#06B6D4',
    },
    {
      icon: <FaLayerGroup />,
      title: 'Modular Components',
      description: 'Mix and match components to build exactly what you need for your project.',
      color: '#3B82F6',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="features-showcase-section" ref={sectionRef}>
      <div className="features-showcase-container">
        <div className="section-header">
          <h2 className="section-title">Why Choose MuneerUI?</h2>
          <p className="section-subtitle">
            Everything you need to build modern, beautiful web applications
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-showcase-card ${activeFeature === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveFeature(index)}
              style={{ '--feature-color': feature.color }}
            >
              <div className="feature-showcase-icon">
                {feature.icon}
              </div>
              <h3 className="feature-showcase-title">{feature.title}</h3>
              <p className="feature-showcase-description">{feature.description}</p>
              <div className="feature-showcase-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
