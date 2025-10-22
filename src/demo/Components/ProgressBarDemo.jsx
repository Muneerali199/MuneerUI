import { useState, useEffect } from 'react';
import { CodeTab, PreviewTab, TabsLayout } from '../../components/common/TabsLayout';
import { Box, Flex, Button, Text } from '@chakra-ui/react';
import CodeExample from '../../components/code/CodeExample';
import PropTable from '../../components/common/Preview/PropTable';
import Dependencies from '../../components/code/Dependencies';
import ProgressBar from '../../content/Components/ProgressBar/ProgressBar';

const ProgressBarDemo = () => {
  const [progress, setProgress] = useState(0);
  const [variant, setVariant] = useState('default');
  const [isAnimating, setIsAnimating] = useState(false);

  const variants = ['default', 'striped', 'glow'];

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsAnimating(false);
            return 100;
          }
          return prev + 1;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isAnimating]);

  const handleStart = () => {
    setProgress(0);
    setIsAnimating(true);
  };

  const propData = [
    {
      name: 'progress',
      type: 'number',
      default: '0',
      description: 'Progress value (0-100)'
    },
    {
      name: 'variant',
      type: "'default' | 'striped' | 'glow'",
      default: "'default'",
      description: 'Visual style of the progress bar'
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      default: "'md'",
      description: 'Size of the progress bar'
    },
    {
      name: 'showPercentage',
      type: 'boolean',
      default: 'true',
      description: 'Show percentage text'
    },
    {
      name: 'animated',
      type: 'boolean',
      default: 'true',
      description: 'Enable smooth animations'
    },
    {
      name: 'label',
      type: 'string',
      default: 'undefined',
      description: 'Label text above progress bar'
    },
    {
      name: 'color',
      type: "'gold' | 'blue' | 'green' | 'red'",
      default: "'gold'",
      description: 'Color scheme'
    }
  ];

  const codeExample = {
    default: `import ProgressBar from './ProgressBar';

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <ProgressBar 
      progress={progress} 
      variant="glow" 
      label="Processing..." 
      color="gold"
    />
  );
}`
  };

  return (
    <TabsLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" minH={400} p={6}>
          <Flex direction="column" gap={8} maxW="600px" mx="auto">
            <ProgressBar 
              progress={progress} 
              variant={variant} 
              label="AI Processing Task"
              color="gold"
            />

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

            <Button
              onClick={handleStart}
              bg="#FFD700"
              color="#000"
              _hover={{ bg: '#FFA500' }}
              isDisabled={isAnimating}
            >
              {isAnimating ? 'Processing...' : 'Start Progress'}
            </Button>
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

export default ProgressBarDemo;
