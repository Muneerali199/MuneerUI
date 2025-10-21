import { CodeTab, PreviewTab, TabsLayout } from '../../components/common/TabsLayout';
import { Box } from '@chakra-ui/react';
import PropTable from '../../components/common/Preview/PropTable';
import CodeExample from '../../components/code/CodeExample';
import Dependencies from '../../components/code/Dependencies';
import Customize from '../../components/common/Preview/Customize';
import useForceRerender from '../../hooks/useForceRerender';
import ParallaxHero from '../../ts-tailwind/Animations/ParallaxHero/ParallaxHero';

const parallaxHeroCode = {
  usage: `import ParallaxHero from './ParallaxHero';

<ParallaxHero
  title="Welcome to the Future"
  subtitle="Experience premium design like never before"
  ctaText="Get Started"
  onCtaClick={() => console.log('CTA clicked')}
/>`,
  code: `// Component code available in ts-tailwind/Animations/ParallaxHero/`,
  tailwind: `// Multi-layer parallax with TailwindCSS`
};

const ParallaxHeroDemo = () => {
  const { key, forceRerender } = useForceRerender();

  const props = [
    {
      name: 'title',
      type: 'string',
      default: 'Welcome to the Future',
      description: 'Hero title text'
    },
    {
      name: 'subtitle',
      type: 'string',
      default: 'Experience premium design like never before',
      description: 'Hero subtitle text'
    },
    {
      name: 'ctaText',
      type: 'string',
      default: 'Get Started',
      description: 'CTA button text'
    },
    {
      name: 'onCtaClick',
      type: 'function',
      default: 'undefined',
      description: 'CTA click handler'
    }
  ];

  return (
    <TabsLayout>
      <PreviewTab>
        <Box 
          height={600} 
          position="relative" 
          className="demo-container" 
          overflow="hidden"
        >
          <ParallaxHero
            key={key}
            title="Welcome to the Future"
            subtitle="Experience premium design like never before"
            ctaText="Get Started"
            onCtaClick={() => alert('CTA Clicked!')}
          />
        </Box>

        <Customize forceRerender={forceRerender} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={parallaxHeroCode} />
        <Dependencies />
        <Box mt={6}>
          <PropTable data={props} />
        </Box>
      </CodeTab>
    </TabsLayout>
  );
};

export default ParallaxHeroDemo;
