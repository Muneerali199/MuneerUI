import { useState } from 'react';
import { CodeTab, PreviewTab, TabsLayout } from '../../components/common/TabsLayout';
import { Box } from '@chakra-ui/react';
import PropTable from '../../components/common/Preview/PropTable';
import CodeExample from '../../components/code/CodeExample';
import Dependencies from '../../components/code/Dependencies';
import Customize from '../../components/common/Preview/Customize';
import useForceRerender from '../../hooks/useForceRerender';
import GlowingGrid from '../../ts-tailwind/Backgrounds/GlowingGrid/GlowingGrid';

const glowingGridCode = {
  usage: `import GlowingGrid from './GlowingGrid';

<div className="relative h-screen bg-black">
  <GlowingGrid 
    perspective={true}
    lineColor="#00ffff"
    glowColor="#ff00ff"
  />
</div>`,
  code: `// Component code available in ts-tailwind/Backgrounds/GlowingGrid/`,
  tailwind: `// Pure TailwindCSS implementation`
};

const GlowingGridDemo = () => {
  const [gridSize, setGridSize] = useState(50);
  const [glowIntensity, setGlowIntensity] = useState(0.8);
  const [perspective, setPerspective] = useState(true);
  const { key, forceRerender } = useForceRerender();

  const props = [
    {
      name: 'gridSize',
      type: 'number',
      default: '50',
      description: 'Grid cell size in pixels'
    },
    {
      name: 'lineColor',
      type: 'string',
      default: '#00ffff',
      description: 'Color of grid lines'
    },
    {
      name: 'glowColor',
      type: 'string',
      default: '#ff00ff',
      description: 'Color of glow effect'
    },
    {
      name: 'glowIntensity',
      type: 'number',
      default: '0.8',
      description: 'Glow intensity (0-1)'
    },
    {
      name: 'perspective',
      type: 'boolean',
      default: 'true',
      description: 'Enable perspective mode'
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
          <GlowingGrid
            key={key}
            gridSize={gridSize}
            lineColor="#00ffff"
            glowColor="#ff00ff"
            glowIntensity={glowIntensity}
            perspective={perspective}
          />
          <Box 
            position="relative" 
            zIndex={10} 
            textAlign="center"
            color="white"
            fontSize="3rem"
            fontWeight="900"
            style={{
              background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Glowing Grid
          </Box>
        </Box>

        <Customize forceRerender={forceRerender} />

        <Box className="controls-container">
          <Box className="control-group">
            <label className="control-label">
              Grid Size: <span className="control-value">{gridSize}</span>
            </label>
            <input
              type="range"
              min="20"
              max="100"
              value={gridSize}
              onChange={e => setGridSize(Number(e.target.value))}
              className="control-slider"
            />
          </Box>

          <Box className="control-group">
            <label className="control-label">
              Glow Intensity: <span className="control-value">{glowIntensity.toFixed(1)}</span>
            </label>
            <input
              type="range"
              min="0.2"
              max="1"
              step="0.1"
              value={glowIntensity}
              onChange={e => setGlowIntensity(Number(e.target.value))}
              className="control-slider"
            />
          </Box>

          <Box className="control-group">
            <label className="control-label">Perspective Mode</label>
            <button
              onClick={() => setPerspective(!perspective)}
              className="color-button"
              style={{ 
                backgroundColor: perspective ? '#00ffff' : '#666',
                padding: '8px 16px',
                borderRadius: '8px',
                color: 'white'
              }}
            >
              {perspective ? 'ON' : 'OFF'}
            </button>
          </Box>
        </Box>
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={glowingGridCode} />
        <Dependencies />
        <Box mt={6}>
          <PropTable data={props} />
        </Box>
      </CodeTab>
    </TabsLayout>
  );
};

export default GlowingGridDemo;
