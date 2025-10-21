import { useState } from 'react';
import { CodeTab, PreviewTab, TabsLayout } from '../../components/common/TabsLayout';
import { Box } from '@chakra-ui/react';
import PropTable from '../../components/common/Preview/PropTable';
import CodeExample from '../../components/code/CodeExample';
import Dependencies from '../../components/code/Dependencies';
import Customize from '../../components/common/Preview/Customize';
import useForceRerender from '../../hooks/useForceRerender';
import ParticleField from '../../ts-tailwind/Backgrounds/ParticleField/ParticleField';

const particleFieldCode = {
  usage: `import ParticleField from './ParticleField';

<div className="relative h-screen bg-black">
  <ParticleField 
    particleCount={200}
    speed={1}
  />
</div>`,
  code: `// Component code available in ts-tailwind/Backgrounds/ParticleField/`,
  tailwind: `// Pure TailwindCSS implementation with mouse interaction`
};

const ParticleFieldDemo = () => {
  const [particleCount, setParticleCount] = useState(200);
  const [speed, setSpeed] = useState(1);
  const { key, forceRerender } = useForceRerender();

  const props = [
    {
      name: 'particleCount',
      type: 'number',
      default: '200',
      description: 'Number of particles'
    },
    {
      name: 'colors',
      type: 'array',
      default: "['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8']",
      description: 'Array of particle colors'
    },
    {
      name: 'speed',
      type: 'number',
      default: '1',
      description: 'Forward movement speed'
    },
    {
      name: 'rotationSpeed',
      type: 'number',
      default: '0.001',
      description: 'Rotation speed based on mouse'
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
          <ParticleField
            key={key}
            particleCount={particleCount}
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
              background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Particle Field 3D
          </Box>
        </Box>

        <Customize forceRerender={forceRerender} />

        <Box className="controls-container">
          <Box className="control-group">
            <label className="control-label">
              Particle Count: <span className="control-value">{particleCount}</span>
            </label>
            <input
              type="range"
              min="50"
              max="400"
              value={particleCount}
              onChange={e => setParticleCount(Number(e.target.value))}
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
        <CodeExample codeObject={particleFieldCode} />
        <Dependencies />
        <Box mt={6}>
          <PropTable data={props} />
        </Box>
      </CodeTab>
    </TabsLayout>
  );
};

export default ParticleFieldDemo;
