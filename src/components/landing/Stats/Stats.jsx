import { useEffect, useRef, useState } from 'react';
import './Stats.css';
import CountUp from '../../../content/TextAnimations/CountUp/CountUp';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const stats = [
    { value: 110, label: 'Premium Components', suffix: '+' },
    { value: 440, label: 'Total Variants', suffix: '+' },
    { value: 100, label: 'Free & Open Source', suffix: '%' },
    { value: 50, label: 'Countries Reached', suffix: '+' },
  ];

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-glow"></div>
              <div className="stat-value">
                {isVisible ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2}
                    separator=","
                    suffix={stat.suffix}
                  />
                ) : (
                  '0' + stat.suffix
                )}
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
