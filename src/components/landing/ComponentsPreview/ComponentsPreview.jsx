import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ComponentsPreview.css';
import { FaArrowRight } from 'react-icons/fa';

const ComponentsPreview = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Components' },
    { id: 'animations', label: 'Animations' },
    { id: 'backgrounds', label: 'Backgrounds' },
    { id: 'text', label: 'Text Effects' },
    { id: 'components', label: 'UI Components' },
  ];

  const components = [
    {
      id: 1,
      name: 'Blob Cursor',
      category: 'animations',
      description: 'Interactive cursor with blob effect',
      link: '/animations/blob-cursor',
      gradient: 'linear-gradient(135deg, #3B82F6, #6366F1)',
    },
    {
      id: 2,
      name: 'Split Text',
      category: 'text',
      description: 'Animated text splitting effect',
      link: '/text-animations/split-text',
      gradient: 'linear-gradient(135deg, #06B6D4, #3B82F6)',
    },
    {
      id: 3,
      name: 'Particles',
      category: 'backgrounds',
      description: 'Dynamic particle background',
      link: '/backgrounds/particles',
      gradient: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
    },
    {
      id: 4,
      name: 'Card Swap',
      category: 'components',
      description: 'Swipeable card component',
      link: '/components/card-swap',
      gradient: 'linear-gradient(135deg, #0EA5E9, #06B6D4)',
    },
    {
      id: 5,
      name: 'Magnetic Button',
      category: 'animations',
      description: 'Button with magnetic effect',
      link: '/animations/magnet',
      gradient: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
    },
    {
      id: 6,
      name: 'Gradient Text',
      category: 'text',
      description: 'Animated gradient text',
      link: '/text-animations/gradient-text',
      gradient: 'linear-gradient(135deg, #3B82F6, #0EA5E9)',
    },
  ];

  const filteredComponents = activeCategory === 'all'
    ? components
    : components.filter((c) => c.category === activeCategory);

  return (
    <section className="components-preview-section">
      <div className="components-preview-container">
        <div className="preview-header">
          <h2 className="preview-title">Explore Components</h2>
          <p className="preview-subtitle">
            Handcrafted components ready to use in your projects
          </p>

          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-filter ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="components-grid">
          {filteredComponents.map((component, index) => (
            <Link
              key={component.id}
              to={component.link}
              className="component-preview-card"
              style={{
                '--card-gradient': component.gradient,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <h3 className="component-name">{component.name}</h3>
                <p className="component-description">{component.description}</p>
              </div>
              <div className="card-footer">
                <span className="view-component">View Component</span>
                <FaArrowRight className="arrow-icon" />
              </div>
            </Link>
          ))}
        </div>

        <div className="preview-cta">
          <Link to="/animations/blob-cursor" className="browse-all-button">
            <span>Browse All 110+ Components</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComponentsPreview;
