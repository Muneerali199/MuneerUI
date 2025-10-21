import { useState } from 'react';
import { CodeTab, PreviewTab, TabsLayout } from '../../components/common/TabsLayout';
import { Box } from '@chakra-ui/react';
import PropTable from '../../components/common/Preview/PropTable';
import CodeExample from '../../components/code/CodeExample';
import Dependencies from '../../components/code/Dependencies';
import Customize from '../../components/common/Preview/Customize';
import useForceRerender from '../../hooks/useForceRerender';
import StarField from '../../ts-tailwind/Backgrounds/StarField/StarField';

const starFieldCode = {
  usage: `import StarField from './StarField';

<div className="relative h-screen bg-black">
  <StarField 
    starCount={200}
    shootingStars={true}
  />
</div>`,
  code: `// Component code available in ts-tailwind/Backgrounds/StarField/`,
  tailwind: `// Pure TailwindCSS implementation`
};

const StarFieldDemo = () => {
  const [starCount, setStarCount] = useState(200);
  const [speed, setSpeed] = useState(1);
  const [shootingStars, setShootingStars] = useState(true);
  const { key, forceRerender } = useForceRerender();

  const props = [
    {
      name: 'starCount',
      type: 'number',
      default: '200',
      description: 'Total number of stars'
    },
    {
      name: 'layers',
      type: 'number',
      default: '3',
      description: 'Number of parallax layers'
    },
    {
      name: 'speed',
      type: 'number',
      default: '1',
      description: 'Movement speed'
    },
    {
      name: 'twinkle',
      type: 'boolean',
      default: 'true',
      description: 'Enable twinkling effect'
    },
    {
      name: 'shootingStars',
      type: 'boolean',
      default: 'true',
      description: 'Enable shooting stars'
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
          <StarField
            key={key}
            starCount={starCount}
            speed={speed}
            shootingStars={shootingStars}
            twinkle={true}
          />
          <Box 
            position="relative" 
            zIndex={10} 
            textAlign="center"
            color="white"
            fontSize="3rem"
            fontWeight="900"
            style={{
              textShadow: '0 0 20px rgba(255,255,255,0.5)'
            }}
          >
            Star Field
          </Box>
        </Box>

        <Customize forceRerender={forceRerender} />

        <Box className="controls-container">
          <Box className="control-group">
            <label className="control-label">
              Star Count: <span className="control-value">{starCount}</span>
            </label>
            <input
              type="range"
              min="50"
              max="400"
              value={starCount}
              onChange={e => setStarCount(Number(e.target.value))}
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
              max="3"
              step="0.1"
              value={speed}
              onChange={e => setSpeed(Number(e.target.value))}
              className="control-slider"
            />
          </Box>

          <Box className="control-group">
            <label className="control-label">Shooting Stars</label>
            <button
              onClick={() => setShootingStars(!shootingStars)}
              className="color-button"
              style={{ 
                backgroundColor: shootingStars ? '#FFD700' : '#666',
                padding: '8px 16px',
                borderRadius: '8px',
                color: 'white'
              }}
            >
              {shootingStars ? 'ON' : 'OFF'}
            </button>
          </Box>
        </Box>
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={starFieldCode} />
        <Dependencies />
        <Box mt={6}>
          <PropTable data={props} />
        </Box>
      </CodeTab>
    </TabsLayout>
  );
};

export default StarFieldDemo;
