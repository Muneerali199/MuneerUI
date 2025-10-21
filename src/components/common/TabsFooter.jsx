import { AiFillHeart } from 'react-icons/ai';
import FadeContent from '../../content/Animations/FadeContent/FadeContent';

const DemoFooter = () => {
  return (
    <FadeContent blur className="preview-footer">
      <p className="footer-description" style={{ opacity: 0.8 }}>
        Created with
        <AiFillHeart className="footer-heart" />
        by{' '}
        <a href="https://github.com/Muneerali199" target="_blank" className="footer-creator-link cursor-target">
          Muneer Ali
        </a>
      </p>
    </FadeContent>
  );
};

export default DemoFooter;
