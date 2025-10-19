import FadeContent from '../../../content/Animations/FadeContent/FadeContent';
import ReactBitsLogo from '../../../assets/logos/react-bits-logo.svg';
import { AiFillHeart } from 'react-icons/ai';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FadeContent blur duration={600}>
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-left">
            <img src={ReactBitsLogo} alt="MuneerUI" className="footer-logo" />
            <p className="footer-description">
              A library created with <AiFillHeart className="footer-heart" /> by{' '}
              <a href="https://github.com/muneerali" target="_blank" className="footer-creator-link">
                Muneer Ali Subzwari
              </a>
            </p>
            <p className="footer-copyright">© {new Date().getFullYear()} MuneerUI - Built by Muneer Ali</p>
          </div>

          <div className="footer-links">
            <a
              href="https://github.com/muneerali"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <Link to="/text-animations/split-text" className="footer-link">
              Docs
            </Link>
            <Link to="/showcase" className="footer-link">
              Showcase
            </Link>
            <a
              href="https://twitter.com/muneerali"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </FadeContent>
  );
};

export default Footer;
