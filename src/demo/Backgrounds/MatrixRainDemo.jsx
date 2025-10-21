import { useState } from 'react';
import { CodeTab, PreviewTab, TabsLayout } from '../../components/common/TabsLayout';
import { Box } from '@chakra-ui/react';
import PropTable from '../../components/common/Preview/PropTable';
import CodeExample from '../../components/code/CodeExample';
import Dependencies from '../../components/code/Dependencies';
import Customize from '../../components/common/Preview/Customize';
import useForceRerender from '../../hooks/useForceRerender';
import MatrixRain from '../../ts-tailwind/Backgrounds/MatrixRain/MatrixRain';

const matrixRainCode = {
  usage: `import MatrixRain from './MatrixRain';

<div className="relative h-screen">
  <MatrixRain 
    color="#0F0"
    speed={1}
  />
</div>`,
  code: `// Component code available in ts-tailwind/Backgrounds/MatrixRain/`,
  tailwind: `// Pure TailwindCSS implementation`
};

const MatrixRainDemo = () => {
  const [fontSize, setFontSize] = useState(16);
  const [speed, setSpeed] = useState(1);
  const { key, forceRerender } = useForceRerender();

  const props = [
    {
      name: 'fontSize',
      type: 'number',
      default: '16',
      description: 'Font size in pixels'
    },
    {
      name: 'speed',
      type: 'number',
      default: '1',
      description: 'Fall speed'
    },
    {
      name: 'color',
      type: 'string',
      default: '#0F0',
      description: 'Color of characters'
    },
    {
      name: 'trailLength',
      type: 'number',
      default: '20',
      description: 'Length of character trails'
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
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <MatrixRain
            key={key}
            fontSize={fontSize}
            speed={speed}
            color="#0F0"
          />
          <Box 
            position="relative" 
            zIndex={10} 
            textAlign="center"
            color="#0F0"
            fontSize="3rem"
            fontWeight="900"
            style={{
              textShadow: '0 0 20px #0F0'
            }}
          >
            Matrix Rain
          </Box>
        </Box>

        <Customize forceRerender={forceRerender} />

        <Box className="controls-container">
          <Box className="control-group">
            <label className="control-label">
              Font Size: <span className="control-value">{fontSize}</span>
            </label>
            <input
              type="range"
              min="10"
              max="30"
              value={fontSize}
              onChange={e => setFontSize(Number(e.target.value))}
              className="control-slider"
            />
          </Box>

          <Box className="control-group">
            <label className="control-label">
              Speed: <span className="control-value">{speed.toFixed(1)}</span>
            </label>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={speed}
              onChange={e => setSpeed(Number(e.target.value))}
              className="control-slider"
            />
          </Box>
        </Box>
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={matrixRainCode} />
        <Dependencies />
        <Box mt={6}>
          <PropTable data={props} />
        </Box>
      </CodeTab>
    </TabsLayout>
  );
};

export default MatrixRainDemo;
