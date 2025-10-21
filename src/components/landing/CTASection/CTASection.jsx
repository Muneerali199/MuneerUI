import { Link } from 'react-router-dom';
import './CTASection.css';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to Build Something Amazing?
          </h2>
          <p className="cta-description">
            Join thousands of developers using MuneerUI to create stunning web experiences.
            Start building today with our production-ready components.
          </p>
          <div className="cta-buttons">
            <Link to="/animations/blob-cursor" className="cta-btn primary">
              <HiSparkles className="btn-icon-left" />
              <span className="btn-text">Get Started Free</span>
              <FaArrowRight className="btn-icon-right" />
            </Link>
            <a 
              href="https://github.com/Muneerali199/MuneerUI" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-btn secondary"
            >
              <FaGithub className="btn-icon-left" />
              <span className="btn-text">View on GitHub</span>
              <FaArrowRight className="btn-icon-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
