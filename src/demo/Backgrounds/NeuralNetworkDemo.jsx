import { useState } from 'react';
import { CodeTab, PreviewTab, TabsLayout } from '../../components/common/TabsLayout';
import { Box } from '@chakra-ui/react';
import PropTable from '../../components/common/Preview/PropTable';
import CodeExample from '../../components/code/CodeExample';
import Dependencies from '../../components/code/Dependencies';
import Customize from '../../components/common/Preview/Customize';
import useForceRerender from '../../hooks/useForceRerender';
import NeuralNetwork from '../../ts-tailwind/Backgrounds/NeuralNetwork/NeuralNetwork';

const neuralNetworkCode = {
  usage: `import NeuralNetwork from './NeuralNetwork';

<div className="relative h-screen bg-slate-900">
  <NeuralNetwork 
    nodeCount={50}
    connectionDistance={150}
    nodeColor="#3B82F6"
    connectionColor="#60A5FA"
  />
</div>`,
  code: `// Component code available in ts-tailwind/Backgrounds/NeuralNetwork/`,
  tailwind: `// Pure TailwindCSS implementation`
};

const NeuralNetworkDemo = () => {
  const [nodeCount, setNodeCount] = useState(50);
  const [connectionDistance, setConnectionDistance] = useState(150);
  const [speed, setSpeed] = useState(0.3);
  const { key, forceRerender } = useForceRerender();

  const props = [
    {
      name: 'nodeCount',
      type: 'number',
      default: '50',
      description: 'Number of nodes in the network'
    },
    {
      name: 'connectionDistance',
      type: 'number',
      default: '150',
      description: 'Maximum distance for node connections'
    },
    {
      name: 'nodeColor',
      type: 'string',
      default: '#3B82F6',
      description: 'Color of the nodes'
    },
    {
      name: 'connectionColor',
      type: 'string',
      default: '#60A5FA',
      description: 'Color of the connections'
    },
    {
      name: 'speed',
      type: 'number',
      default: '0.3',
      description: 'Node movement speed'
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
          bg="#0f172a"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <NeuralNetwork
            key={key}
            nodeCount={nodeCount}
            connectionDistance={connectionDistance}
            nodeColor="#3B82F6"
            connectionColor="#60A5FA"
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
              background: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Neural Network
          </Box>
        </Box>

        <Customize forceRerender={forceRerender} />

        <Box className="controls-container">
          <Box className="control-group">
            <label className="control-label">
              Node Count: <span className="control-value">{nodeCount}</span>
            </label>
            <input
              type="range"
              min="20"
              max="100"
              value={nodeCount}
              onChange={e => setNodeCount(Number(e.target.value))}
              className="control-slider"
            />
          </Box>

          <Box className="control-group">
            <label className="control-label">
              Connection Distance: <span className="control-value">{connectionDistance}</span>
            </label>
            <input
              type="range"
              min="80"
              max="250"
              value={connectionDistance}
              onChange={e => setConnectionDistance(Number(e.target.value))}
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
              max="1"
              step="0.1"
              value={speed}
              onChange={e => setSpeed(Number(e.target.value))}
              className="control-slider"
            />
          </Box>
        </Box>
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={neuralNetworkCode} />
        <Dependencies />
        <Box mt={6}>
          <PropTable data={props} />
        </Box>
      </CodeTab>
    </TabsLayout>
  );
};

export default NeuralNetworkDemo;
