import { useState } from 'react';
import { CodeTab, PreviewTab, TabsLayout } from '../../components/common/TabsLayout';
import { Box } from '@chakra-ui/react';
import PropTable from '../../components/common/Preview/PropTable';
import CodeExample from '../../components/code/CodeExample';
import Dependencies from '../../components/code/Dependencies';
import Customize from '../../components/common/Preview/Customize';
import useForceRerender from '../../hooks/useForceRerender';
import { cosmicDust } from '../../constants/code/Backgrounds/cosmicDustCode';
import CosmicDust from '../../ts-tailwind/Backgrounds/CosmicDust/CosmicDust';

const CosmicDustDemo = () => {
  const [particleCount, setParticleCount] = useState(150);
  const [particleColor, setParticleColor] = useState('#FFD700');
  const [glowIntensity, setGlowIntensity] = useState(0.8);
  const [speed, setSpeed] = useState(0.5);
  const { key, forceRerender } = useForceRerender();

  const props = [
    {
      name: 'particleCount',
      type: 'number',
      default: '150',
      description: 'Number of particles to render'
    },
    {
      name: 'particleColor',
      type: 'string',
      default: '#FFD700',
      description: 'Color of the particles (hex, rgb, or named color)'
    },
    {
      name: 'glowIntensity',
      type: 'number',
      default: '0.8',
      description: 'Intensity of the particle glow effect (0-1)'
    },
    {
      name: 'speed',
      type: 'number',
      default: '0.5',
      description: 'Movement speed of particles (0-2)'
    },
    {
      name: 'className',
      type: 'string',
      default: '',
      description: 'Additional CSS classes'
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
          bg="#000000"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CosmicDust
            key={key}
            particleCount={particleCount}
            particleColor={particleColor}
            glowIntensity={glowIntensity}
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
              background: 'linear-gradient(135deg, #FFFFFF, #FFD700)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Cosmic Dust
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
              max="300"
              value={particleCount}
              onChange={e => setParticleCount(Number(e.target.value))}
              className="control-slider"
            />
          </Box>

          <Box className="control-group">
            <label className="control-label">Particle Color:</label>
            <Box display="flex" gap={2} flexWrap="wrap">
              {['#FFD700', '#FFA500', '#FFFFFF', '#3B82F6', '#8B5CF6', '#EC4899'].map(color => (
                <button
                  key={color}
                  onClick={() => setParticleColor(color)}
                  className={`color-button ${particleColor === color ? 'active' : ''}`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </Box>
          </Box>

          <Box className="control-group">
            <label className="control-label">
              Glow Intensity: <span className="control-value">{glowIntensity.toFixed(1)}</span>
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={glowIntensity}
              onChange={e => setGlowIntensity(Number(e.target.value))}
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
        </Box>
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={cosmicDust} />
        <Dependencies />
        <Box mt={6}>
          <PropTable data={props} />
        </Box>
      </CodeTab>
    </TabsLayout>
  );
};

export default CosmicDustDemo;
