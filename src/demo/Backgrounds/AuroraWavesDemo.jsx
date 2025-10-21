import { useState } from 'react';
import { CodeTab, PreviewTab, TabsLayout } from '../../components/common/TabsLayout';
import { Box } from '@chakra-ui/react';
import PropTable from '../../components/common/Preview/PropTable';
import CodeExample from '../../components/code/CodeExample';
import Dependencies from '../../components/code/Dependencies';
import Customize from '../../components/common/Preview/Customize';
import useForceRerender from '../../hooks/useForceRerender';
import AuroraWaves from '../../ts-tailwind/Backgrounds/AuroraWaves/AuroraWaves';

const auroraWavesCode = {
  usage: `import AuroraWaves from './AuroraWaves';

<div className="relative h-screen bg-gradient-to-b from-purple-900 to-black">
  <AuroraWaves 
    colors={['#00ffff', '#ff00ff', '#ffff00', '#00ff00']}
    waveCount={5}
    speed={0.5}
    opacity={0.6}
    blur={40}
  />
  <div className="relative z-10">Your Content</div>
</div>`,
  code: `// Component code available in ts-tailwind/Backgrounds/AuroraWaves/`,
  tailwind: `// Pure TailwindCSS implementation`
};

const AuroraWavesDemo = () => {
  const [waveCount, setWaveCount] = useState(5);
  const [speed, setSpeed] = useState(0.5);
  const [opacity, setOpacity] = useState(0.6);
  const [blur, setBlur] = useState(40);
  const { key, forceRerender } = useForceRerender();

  const props = [
    {
      name: 'colors',
      type: 'array',
      default: "['#00ffff', '#ff00ff', '#ffff00', '#00ff00']",
      description: 'Array of hex colors for the waves'
    },
    {
      name: 'waveCount',
      type: 'number',
      default: '5',
      description: 'Number of wave layers'
    },
    {
      name: 'speed',
      type: 'number',
      default: '0.5',
      description: 'Animation speed'
    },
    {
      name: 'opacity',
      type: 'number',
      default: '0.6',
      description: 'Wave opacity (0-1)'
    },
    {
      name: 'blur',
      type: 'number',
      default: '40',
      description: 'Blur amount in pixels'
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
          bg="linear-gradient(180deg, #1a0033 0%, #000000 100%)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <AuroraWaves
            key={key}
            colors={['#00ffff', '#ff00ff', '#ffff00', '#00ff00']}
            waveCount={waveCount}
            speed={speed}
            opacity={opacity}
            blur={blur}
          />
          <Box 
            position="relative" 
            zIndex={10} 
            textAlign="center"
            color="white"
            fontSize="3rem"
            fontWeight="900"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF, #00ffff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Aurora Waves
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
              min="2"
              max="10"
              value={waveCount}
              onChange={e => setWaveCount(Number(e.target.value))}
              className="control-slider"
            />
          </Box>

          <Box className="control-group">
            <label className="control-label">
              Speed: <span className="control-value">{speed.toFixed(1)}</span>
            </label>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={speed}
              onChange={e => setSpeed(Number(e.target.value))}
              className="control-slider"
            />
          </Box>

          <Box className="control-group">
            <label className="control-label">
              Opacity: <span className="control-value">{opacity.toFixed(1)}</span>
            </label>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.1"
              value={opacity}
              onChange={e => setOpacity(Number(e.target.value))}
              className="control-slider"
            />
          </Box>

          <Box className="control-group">
            <label className="control-label">
              Blur: <span className="control-value">{blur}</span>
            </label>
            <input
              type="range"
              min="10"
              max="80"
              value={blur}
              onChange={e => setBlur(Number(e.target.value))}
              className="control-slider"
            />
          </Box>
        </Box>
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={auroraWavesCode} />
        <Dependencies />
        <Box mt={6}>
          <PropTable data={props} />
        </Box>
      </CodeTab>
    </TabsLayout>
  );
};

export default AuroraWavesDemo;
