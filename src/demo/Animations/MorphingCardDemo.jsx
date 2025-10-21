import { useState } from 'react';
import { CodeTab, PreviewTab, TabsLayout } from '../../components/common/TabsLayout';
import { Box } from '@chakra-ui/react';
import PropTable from '../../components/common/Preview/PropTable';
import CodeExample from '../../components/code/CodeExample';
import Dependencies from '../../components/code/Dependencies';
import Customize from '../../components/common/Preview/Customize';
import useForceRerender from '../../hooks/useForceRerender';
import MorphingCard from '../../ts-tailwind/Animations/MorphingCard/MorphingCard';

const morphingCardCode = {
  usage: `import MorphingCard from './MorphingCard';

<MorphingCard
  title="Premium Feature"
  description="Experience the next level of design"
  icon="✨"
  gradient="from-purple-600 via-pink-600 to-blue-600"
/>`,
  code: `// Component code available in ts-tailwind/Animations/MorphingCard/`,
  tailwind: `// Pure TailwindCSS implementation with 3D transforms`
};

const MorphingCardDemo = () => {
  const { key, forceRerender } = useForceRerender();

  const props = [
    {
      name: 'title',
      type: 'string',
      default: 'Premium Feature',
      description: 'Card title text'
    },
    {
      name: 'description',
      type: 'string',
      default: 'Experience the next level of design',
      description: 'Card description text'
    },
    {
      name: 'icon',
      type: 'string',
      default: '✨',
      description: 'Icon emoji or text'
    },
    {
      name: 'gradient',
      type: 'string',
      default: 'from-purple-600 via-pink-600 to-blue-600',
      description: 'TailwindCSS gradient classes'
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
          <MorphingCard
            key={key}
            title="Premium Feature"
            description="Experience the next level of design with our cutting-edge 3D morphing effects"
            icon="✨"
            gradient="from-amber-500 via-orange-500 to-red-500"
          />
        </Box>

        <Customize forceRerender={forceRerender} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={morphingCardCode} />
        <Dependencies />
        <Box mt={6}>
          <PropTable data={props} />
        </Box>
      </CodeTab>
    </TabsLayout>
  );
};

export default MorphingCardDemo;
