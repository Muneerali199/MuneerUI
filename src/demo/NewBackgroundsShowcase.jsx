import { useState } from 'react';
import { Box, Button, VStack, HStack, Text, Heading } from '@chakra-ui/react';
import CosmicDustTailwind from '../ts-tailwind/Backgrounds/CosmicDust/CosmicDustTailwind';
import AuroraWaves from '../ts-tailwind/Backgrounds/AuroraWaves/AuroraWaves';
import NeuralNetwork from '../ts-tailwind/Backgrounds/NeuralNetwork/NeuralNetwork';
import ParticleField from '../ts-tailwind/Backgrounds/ParticleField/ParticleField';
import GlowingGrid from '../ts-tailwind/Backgrounds/GlowingGrid/GlowingGrid';
import MatrixRain from '../ts-tailwind/Backgrounds/MatrixRain/MatrixRain';
import FloatingBubbles from '../ts-tailwind/Backgrounds/FloatingBubbles/FloatingBubbles';
import DigitalWaves from '../ts-tailwind/Backgrounds/DigitalWaves/DigitalWaves';
import StarField from '../ts-tailwind/Backgrounds/StarField/StarField';

const NewBackgroundsShowcase = () => {
  const [activeBackground, setActiveBackground] = useState('cosmicDust');

  const backgrounds = [
    {
      id: 'cosmicDust',
      name: 'Cosmic Dust (Tailwind)',
      component: <CosmicDustTailwind particleCount={150} particleColor="#FFD700" />,
      bg: 'black'
    },
    {
      id: 'auroraWaves',
      name: 'Aurora Waves',
      component: <AuroraWaves colors={['#00ffff', '#ff00ff', '#ffff00', '#00ff00']} waveCount={5} />,
      bg: 'linear-gradient(180deg, #1a0033 0%, #000000 100%)'
    },
    {
      id: 'neuralNetwork',
      name: 'Neural Network',
      component: <NeuralNetwork nodeCount={50} nodeColor="#3B82F6" connectionColor="#60A5FA" />,
      bg: '#0f172a'
    },
    {
      id: 'particleField',
      name: 'Particle Field 3D',
      component: <ParticleField particleCount={200} speed={1} />,
      bg: 'black'
    },
    {
      id: 'glowingGrid',
      name: 'Glowing Grid',
      component: <GlowingGrid perspective={true} lineColor="#00ffff" glowColor="#ff00ff" />,
      bg: 'black'
    },
    {
      id: 'matrixRain',
      name: 'Matrix Rain',
      component: <MatrixRain color="#0F0" speed={1} />,
      bg: 'black'
    },
    {
      id: 'floatingBubbles',
      name: 'Floating Bubbles',
      component: <FloatingBubbles bubbleCount={30} />,
      bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 'digitalWaves',
      name: 'Digital Waves',
      component: <DigitalWaves waveCount={3} colors={['#FF006E', '#8338EC', '#3A86FF']} />,
      bg: 'black'
    },
    {
      id: 'starField',
      name: 'Star Field',
      component: <StarField starCount={200} shootingStars={true} />,
      bg: 'black'
    }
  ];

  const currentBg = backgrounds.find(bg => bg.id === activeBackground);

  return (
    <Box minH="100vh" bg="gray.900" p={8}>
      <VStack spacing={8} align="stretch">
        <Heading color="white" textAlign="center" size="2xl">
          New Background Components Showcase
        </Heading>
        
        <Text color="gray.300" textAlign="center" fontSize="lg">
          Click on any component to preview it
        </Text>

        {/* Component Selector */}
        <HStack spacing={4} flexWrap="wrap" justify="center">
          {backgrounds.map(bg => (
            <Button
              key={bg.id}
              onClick={() => setActiveBackground(bg.id)}
              colorScheme={activeBackground === bg.id ? 'blue' : 'gray'}
              variant={activeBackground === bg.id ? 'solid' : 'outline'}
              size="md"
            >
              {bg.name}
            </Button>
          ))}
        </HStack>

        {/* Preview Area */}
        <Box
          position="relative"
          height="600px"
          borderRadius="xl"
          overflow="hidden"
          boxShadow="2xl"
          background={currentBg?.bg}
        >
          {currentBg?.component}
          
          <Box
            position="relative"
            zIndex={10}
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100%"
            pointerEvents="none"
          >
            <VStack spacing={4}>
              <Heading
                color="white"
                size="3xl"
                textAlign="center"
                style={{
                  background: 'linear-gradient(135deg, #FFFFFF, #FFD700)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 40px rgba(255, 255, 255, 0.3)'
                }}
              >
                {currentBg?.name}
              </Heading>
              <Text
                color="whiteAlpha.800"
                fontSize="xl"
                textAlign="center"
                maxW="600px"
                px={4}
              >
                Interactive background component with customizable properties
              </Text>
            </VStack>
          </Box>
        </Box>

        {/* Component Info */}
        <Box
          bg="gray.800"
          p={6}
          borderRadius="lg"
          border="1px solid"
          borderColor="gray.700"
        >
          <Heading size="md" color="white" mb={4}>
            Component Details
          </Heading>
          <VStack align="start" spacing={2}>
            <Text color="gray.300">
              <strong>Component:</strong> {currentBg?.name}
            </Text>
            <Text color="gray.300">
              <strong>Type:</strong> Canvas-based animation
            </Text>
            <Text color="gray.300">
              <strong>Framework:</strong> React + TailwindCSS
            </Text>
            <Text color="gray.300">
              <strong>Performance:</strong> Optimized with requestAnimationFrame
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default NewBackgroundsShowcase;
