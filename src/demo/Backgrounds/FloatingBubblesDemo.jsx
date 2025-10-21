import { useState } from 'react';
import { CodeTab, PreviewTab, TabsLayout } from '../../components/common/TabsLayout';
import { Box } from '@chakra-ui/react';
import PropTable from '../../components/common/Preview/PropTable';
import CodeExample from '../../components/code/CodeExample';
import Dependencies from '../../components/code/Dependencies';
import Customize from '../../components/common/Preview/Customize';
import useForceRerender from '../../hooks/useForceRerender';
import FloatingBubbles from '../../ts-tailwind/Backgrounds/FloatingBubbles/FloatingBubbles';

const floatingBubblesCode = {
  usage: `import FloatingBubbles from './FloatingBubbles';

<div className="relative h-screen bg-gradient-to-br from-blue-500 to-purple-600">
  <FloatingBubbles 
    bubbleCount={30}
  />
</div>`,
  code: `// Component code available in ts-tailwind/Backgrounds/FloatingBubbles/`,
  tailwind: `// Pure TailwindCSS implementation with mouse interaction`
};

const FloatingBubblesDemo = () => {
  const [bubbleCount, setBubbleCount] = useState(30);
  const [speed, setSpeed] = useState(0.5);
  const { key, forceRerender } = useForceRerender();

  const props = [
    {
      name: 'bubbleCount',
      type: 'number',
      default: '30',
      description: 'Number of bubbles'
    },
    {
      name: 'minSize',
      type: 'number',
      default: '20',
      description: 'Minimum bubble size'
    },
    {
      name: 'maxSize',
      type: 'number',
      default: '80',
      description: 'Maximum bubble size'
    },
    {
      name: 'speed',
      type: 'number',
      default: '0.5',
      description: 'Float speed'
    },
    {
      name: 'opacity',
      type: 'number',
      default: '0.6',
      description: 'Bubble opacity (0-1)'
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
          bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <FloatingBubbles
            key={key}
            bubbleCount={bubbleCount}
            speed={speed}
          />
          <Box 
            position="relative" 
            zIndex={10} 
            textAlign="center"
            color="white"
            fontSize="3rem"
            fontWeight="900"
            style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}
          >
            Floating Bubbles
          </Box>
        </Box>

        <Customize forceRerender={forceRerender} />

        <Box className="controls-container">
          <Box className="control-group">
            <label className="control-label">
              Bubble Count: <span className="control-value">{bubbleCount}</span>
            </label>
            <input
              type="range"
              min="10"
              max="60"
              value={bubbleCount}
              onChange={e => setBubbleCount(Number(e.target.value))}
              className="control-slider"
            />
          </Box>

          <Box className="control-group">
            <label className="control-label">
              Speed: <span className="control-value">{speed.toFixed(1)}</span>
            </label>
            <input
              type="range"
              min="0.2"
              max="1.5"
              step="0.1"
              value={speed}
              onChange={e => setSpeed(Number(e.target.value))}
              className="control-slider"
            />
          </Box>
        </Box>
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={floatingBubblesCode} />
        <Dependencies />
        <Box mt={6}>
          <PropTable data={props} />
        </Box>
      </CodeTab>
    </TabsLayout>
  );
};

export default FloatingBubblesDemo;
