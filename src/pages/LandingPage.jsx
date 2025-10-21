import { useEffect } from 'react';
import NewHero from '../components/landing/NewHero/NewHero';
import FeaturesShowcase from '../components/landing/FeaturesShowcase/FeaturesShowcase';
import ComponentsPreview from '../components/landing/ComponentsPreview/ComponentsPreview';
import Stats from '../components/landing/Stats/Stats';
import TechStack from '../components/landing/TechStack/TechStack';
import CTASection from '../components/landing/CTASection/CTASection';
import Footer from '../components/landing/Footer/Footer';

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Ensure body is scrollable
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
    document.documentElement.style.overflow = 'auto';
    document.documentElement.style.height = 'auto';
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
    };
  }, []);

  return (
    <div style={{ 
      background: 'linear-gradient(180deg, #000000 0%, #0A0A0A 50%, #000000 100%)', 
      minHeight: '100vh',
      width: '100%',
      overflow: 'visible'
    }}>
      <title>MuneerUI - Modern React Component Library</title>

      <NewHero />
      <FeaturesShowcase />
      <ComponentsPreview />
      <Stats />
      <TechStack />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
