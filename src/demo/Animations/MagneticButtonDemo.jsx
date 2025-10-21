import { CodeTab, PreviewTab, TabsLayout } from '../../components/common/TabsLayout';
import { Box } from '@chakra-ui/react';
import PropTable from '../../components/common/Preview/PropTable';
import CodeExample from '../../components/code/CodeExample';
import Dependencies from '../../components/code/Dependencies';
import Customize from '../../components/common/Preview/Customize';
import useForceRerender from '../../hooks/useForceRerender';
import MagneticButton from '../../ts-tailwind/Animations/MagneticButton/MagneticButton';

const magneticButtonCode = {
  usage: `import MagneticButton from './MagneticButton';

<MagneticButton
  variant="primary"
  size="lg"
  onClick={() => console.log('Clicked!')}
>
  Magnetic Button
</MagneticButton>`,
  code: `// Component code available in ts-tailwind/Animations/MagneticButton/`,
  tailwind: `// Magnetic attraction effect with TailwindCSS`
};

const MagneticButtonDemo = () => {
  const { key, forceRerender } = useForceRerender();

  const props = [
    {
      name: 'variant',
      type: 'string',
      default: 'primary',
      description: 'Button variant: primary, secondary, success, danger, gold'
    },
    {
      name: 'size',
      type: 'string',
      default: 'md',
      description: 'Button size: sm, md, lg, xl'
    },
    {
      name: 'onClick',
      type: 'function',
      default: 'undefined',
      description: 'Click handler'
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
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={8}
        >
          <Box textAlign="center" color="white" mb={4}>
            <p className="text-lg">Move your mouse near the buttons to see the magnetic effect!</p>
          </Box>
          
          <Box display="flex" gap={6} flexWrap="wrap" justifyContent="center">
            <MagneticButton key={key} variant="primary" size="lg">
              Primary
            </MagneticButton>
            <MagneticButton key={key} variant="secondary" size="lg">
              Secondary
            </MagneticButton>
            <MagneticButton key={key} variant="success" size="lg">
              Success
            </MagneticButton>
            <MagneticButton key={key} variant="danger" size="lg">
              Danger
            </MagneticButton>
            <MagneticButton key={key} variant="gold" size="lg">
              Gold
            </MagneticButton>
          </Box>
        </Box>

        <Customize forceRerender={forceRerender} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={magneticButtonCode} />
        <Dependencies />
        <Box mt={6}>
          <PropTable data={props} />
        </Box>
      </CodeTab>
    </TabsLayout>
  );
};

export default MagneticButtonDemo;
