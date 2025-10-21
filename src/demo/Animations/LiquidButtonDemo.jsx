import { CodeTab, PreviewTab, TabsLayout } from '../../components/common/TabsLayout';
import { Box } from '@chakra-ui/react';
import PropTable from '../../components/common/Preview/PropTable';
import CodeExample from '../../components/code/CodeExample';
import Dependencies from '../../components/code/Dependencies';
import Customize from '../../components/common/Preview/Customize';
import useForceRerender from '../../hooks/useForceRerender';
import LiquidButton from '../../ts-tailwind/Animations/LiquidButton/LiquidButton';

const liquidButtonCode = {
  usage: `import LiquidButton from './LiquidButton';

<LiquidButton
  variant="premium"
  size="lg"
  onClick={() => console.log('Clicked!')}
>
  Get Started
</LiquidButton>`,
  code: `// Component code available in ts-tailwind/Animations/LiquidButton/`,
  tailwind: `// Pure TailwindCSS with SVG liquid effects`
};

const LiquidButtonDemo = () => {
  const { key, forceRerender } = useForceRerender();

  const props = [
    {
      name: 'variant',
      type: 'string',
      default: 'primary',
      description: 'Button variant: primary, success, danger, gold, premium'
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
      description: 'Click handler function'
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
          gap={6}
        >
          <LiquidButton key={key} variant="primary" size="lg">
            Primary Button
          </LiquidButton>
          <LiquidButton key={key} variant="premium" size="lg">
            Premium Button
          </LiquidButton>
          <LiquidButton key={key} variant="success" size="md">
            Success Button
          </LiquidButton>
          <LiquidButton key={key} variant="danger" size="md">
            Danger Button
          </LiquidButton>
          <LiquidButton key={key} variant="gold" size="md">
            Gold Button
          </LiquidButton>
        </Box>

        <Customize forceRerender={forceRerender} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={liquidButtonCode} />
        <Dependencies />
        <Box mt={6}>
          <PropTable data={props} />
        </Box>
      </CodeTab>
    </TabsLayout>
  );
};

export default LiquidButtonDemo;
