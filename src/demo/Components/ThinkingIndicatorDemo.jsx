import { useState } from 'react';
import { CodeTab, PreviewTab, TabsLayout } from '../../components/common/TabsLayout';
import { Box, Flex, Button, Text } from '@chakra-ui/react';
import CodeExample from '../../components/code/CodeExample';
import PropTable from '../../components/common/Preview/PropTable';
import Dependencies from '../../components/code/Dependencies';
import ThinkingIndicator from '../../content/Components/ThinkingIndicator/ThinkingIndicator';

const ThinkingIndicatorDemo = () => {
  const [variant, setVariant] = useState('dots');
  const [size, setSize] = useState('md');

  const variants = ['dots', 'pulse', 'wave', 'brain'];
  const sizes = ['sm', 'md', 'lg'];

  const propData = [
    {
      name: 'text',
      type: 'string',
      default: "'AI is thinking'",
      description: 'Text to display next to the indicator'
    },
    {
      name: 'variant',
      type: "'dots' | 'pulse' | 'wave' | 'brain'",
      default: "'dots'",
      description: 'Visual style of the indicator'
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      default: "'md'",
      description: 'Size of the indicator'
    },
    {
      name: 'showText',
      type: 'boolean',
      default: 'true',
      description: 'Whether to show the text label'
    }
  ];

  const codeExample = {
    default: `import ThinkingIndicator from './ThinkingIndicator';

function App() {
  return (
    <ThinkingIndicator 
      variant="brain" 
      text="AI is thinking" 
      size="md"
    />
  );
}`
  };

  return (
    <TabsLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" minH={400} p={6}>
          <Flex direction="column" align="center" gap={8}>
            <ThinkingIndicator variant={variant} size={size} text="AI is thinking" />

            <Flex gap={2} wrap="wrap" justify="center">
              <Text fontSize="sm" color="#E0E0E0" w="100%" textAlign="center" mb={2}>Variant:</Text>
              {variants.map(v => (
                <Button
                  key={v}
                  onClick={() => setVariant(v)}
                  bg={variant === v ? '#FFD700' : '#1a1a1a'}
                  color={variant === v ? '#000' : '#fff'}
                  _hover={{ bg: variant === v ? '#FFA500' : '#2a2a2a' }}
                  size="sm"
                >
                  {v}
                </Button>
              ))}
            </Flex>

            <Flex gap={2} wrap="wrap" justify="center">
              <Text fontSize="sm" color="#E0E0E0" w="100%" textAlign="center" mb={2}>Size:</Text>
              {sizes.map(s => (
                <Button
                  key={s}
                  onClick={() => setSize(s)}
                  bg={size === s ? '#FFD700' : '#1a1a1a'}
                  color={size === s ? '#000' : '#fff'}
                  _hover={{ bg: size === s ? '#FFA500' : '#2a2a2a' }}
                  size="sm"
                >
                  {s}
                </Button>
              ))}
            </Flex>
          </Flex>
        </Box>

        <PropTable data={propData} />
        <Dependencies dependencyList={[]} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={codeExample} />
      </CodeTab>
    </TabsLayout>
  );
};

export default ThinkingIndicatorDemo;
