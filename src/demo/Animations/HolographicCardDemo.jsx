import { CodeTab, PreviewTab, TabsLayout } from '../../components/common/TabsLayout';
import { Box } from '@chakra-ui/react';
import PropTable from '../../components/common/Preview/PropTable';
import CodeExample from '../../components/code/CodeExample';
import Dependencies from '../../components/code/Dependencies';
import Customize from '../../components/common/Preview/Customize';
import useForceRerender from '../../hooks/useForceRerender';
import HolographicCard from '../../ts-tailwind/Animations/HolographicCard/HolographicCard';

const holographicCardCode = {
  usage: `import HolographicCard from './HolographicCard';

<HolographicCard
  title="Premium Card"
  description="Hover to see the magic"
/>`,
  code: `// Component code available in ts-tailwind/Animations/HolographicCard/`,
  tailwind: `// Holographic effect with TailwindCSS`
};

const HolographicCardDemo = () => {
  const { key, forceRerender } = useForceRerender();

  const props = [
    {
      name: 'title',
      type: 'string',
      default: 'Premium Card',
      description: 'Card title'
    },
    {
      name: 'description',
      type: 'string',
      default: 'Hover to see the magic',
      description: 'Card description'
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
          <HolographicCard
            key={key}
            title="Holographic Card"
            description="Move your mouse over the card to see the stunning holographic effect"
          />
        </Box>

        <Customize forceRerender={forceRerender} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={holographicCardCode} />
        <Dependencies />
        <Box mt={6}>
          <PropTable data={props} />
        </Box>
      </CodeTab>
    </TabsLayout>
  );
};

export default HolographicCardDemo;
