import { CodeTab, PreviewTab, TabsLayout } from '../../components/common/TabsLayout';
import { Box } from '@chakra-ui/react';
import PropTable from '../../components/common/Preview/PropTable';
import CodeExample from '../../components/code/CodeExample';
import Dependencies from '../../components/code/Dependencies';
import Customize from '../../components/common/Preview/Customize';
import useForceRerender from '../../hooks/useForceRerender';
import GlassCard from '../../ts-tailwind/Animations/GlassCard/GlassCard';

const glassCardCode = {
  usage: `import GlassCard from './GlassCard';

<GlassCard
  title="Premium Feature"
  description="Experience the future of design"
  icon="✨"
  stats={[
    { label: "Users", value: "10K+" },
    { label: "Rating", value: "4.9" },
    { label: "Reviews", value: "2.5K" }
  ]}
/>`,
  code: `// Component code available in ts-tailwind/Animations/GlassCard/`,
  tailwind: `// Glassmorphism with TailwindCSS`
};

const GlassCardDemo = () => {
  const { key, forceRerender } = useForceRerender();

  const props = [
    {
      name: 'title',
      type: 'string',
      default: 'Premium Feature',
      description: 'Card title'
    },
    {
      name: 'description',
      type: 'string',
      default: 'Experience the future...',
      description: 'Card description'
    },
    {
      name: 'icon',
      type: 'string',
      default: '✨',
      description: 'Icon emoji'
    },
    {
      name: 'stats',
      type: 'array',
      default: '[{label, value}]',
      description: 'Stats to display'
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
          bg="black"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={8}
        >
          <GlassCard
            key={key}
            title="Premium Feature"
            description="Experience the future of design with our cutting-edge glassmorphism effects and modern aesthetics"
            icon="✨"
            stats={[
              { label: "Users", value: "10K+" },
              { label: "Rating", value: "4.9" },
              { label: "Reviews", value: "2.5K" }
            ]}
          />
        </Box>

        <Customize forceRerender={forceRerender} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={glassCardCode} />
        <Dependencies />
        <Box mt={6}>
          <PropTable data={props} />
        </Box>
      </CodeTab>
    </TabsLayout>
  );
};

export default GlassCardDemo;
