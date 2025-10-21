import { useState } from 'react';
import { CodeTab, PreviewTab, TabsLayout } from '../../components/common/TabsLayout';
import { Box } from '@chakra-ui/react';
import PropTable from '../../components/common/Preview/PropTable';
import CodeExample from '../../components/code/CodeExample';
import Dependencies from '../../components/code/Dependencies';
import Customize from '../../components/common/Preview/Customize';
import useForceRerender from '../../hooks/useForceRerender';
import DigitalWaves from '../../ts-tailwind/Backgrounds/DigitalWaves/DigitalWaves';

const digitalWavesCode = {
  usage: `import DigitalWaves from './DigitalWaves';

<div className="relative h-screen bg-black">
  <DigitalWaves 
    waveCount={3}
    glow={true}
  />
</div>`,
  code: `// Component code available in ts-tailwind/Backgrounds/DigitalWaves/`,
  tailwind: `// Pure TailwindCSS implementation`
};

const DigitalWavesDemo = () => {
  const [waveCount, setWaveCount] = useState(3);
  const [amplitude, setAmplitude] = useState(50);
  const [speed, setSpeed] = useState(0.03);
  const { key, forceRerender } = useForceRerender();

  const props = [
    {
      name: 'waveCount',
      type: 'number',
      default: '3',
      description: 'Number of wave layers'
    },
    {
      name: 'colors',
      type: 'array',
      default: "['#FF006E', '#8338EC', '#3A86FF']",
      description: 'Array of wave colors'
    },
    {
      name: 'amplitude',
      type: 'number',
      default: '50',
      description: 'Wave height'
    },
    {
      name: 'speed',
      type: 'number',
      default: '0.03',
      description: 'Animation speed'
    },
    {
      name: 'glow',
      type: 'boolean',
      default: 'true',
      description: 'Enable glow effect'
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
        >
          <DigitalWaves
            key={key}
            waveCount={waveCount}
            colors={['#FF006E', '#8338EC', '#3A86FF']}
            amplitude={amplitude}
            speed={speed}
            glow={true}
          />
          <Box 
            position="relative" 
            zIndex={10} 
            textAlign="center"
            color="white"
            fontSize="3rem"
            fontWeight="900"
            style={{
              background: 'linear-gradient(135deg, #FF006E, #8338EC, #3A86FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Digital Waves
          </Box>
        </Box>

        <Customize forceRerender={forceRerender} />

        <Box className="controls-container">
          <Box className="control-group">
            <label className="control-label">
              Wave Count: <span className="control-value">{waveCount}</span>
            </label>
            <input
              type="range"
              min="1"
              max="6"
              value={waveCount}
              onChange={e => setWaveCount(Number(e.target.value))}
              className="control-slider"
            />
          </Box>

          <Box className="control-group">
            <label className="control-label">
              Amplitude: <span className="control-value">{amplitude}</span>
            </label>
            <input
              type="range"
              min="20"
              max="100"
              value={amplitude}
              onChange={e => setAmplitude(Number(e.target.value))}
              className="control-slider"
            />
          </Box>

          <Box className="control-group">
            <label className="control-label">
              Speed: <span className="control-value">{speed.toFixed(2)}</span>
            </label>
            <input
              type="range"
              min="0.01"
              max="0.1"
              step="0.01"
              value={speed}
              onChange={e => setSpeed(Number(e.target.value))}
              className="control-slider"
            />
          </Box>
        </Box>
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={digitalWavesCode} />
        <Dependencies />
        <Box mt={6}>
          <PropTable data={props} />
        </Box>
      </CodeTab>
    </TabsLayout>
  );
};

export default DigitalWavesDemo;
