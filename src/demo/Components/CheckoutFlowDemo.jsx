import { CodeTab, PreviewTab, TabsLayout } from '../../components/common/TabsLayout';
import { Box } from '@chakra-ui/react';
import PropTable from '../../components/common/Preview/PropTable';
import CodeExample from '../../components/code/CodeExample';
import Dependencies from '../../components/code/Dependencies';
import Customize from '../../components/common/Preview/Customize';
import useForceRerender from '../../hooks/useForceRerender';
import CheckoutFlow from '../../ts-tailwind/Components/CheckoutFlow/CheckoutFlow';

const checkoutFlowCode = {
  usage: `import CheckoutFlow from './CheckoutFlow';

<CheckoutFlow
  onComplete={(data) => {
    console.log('Checkout complete:', data);
    // Process order
  }}
/>`,
  code: `// Component code available in ts-tailwind/Components/CheckoutFlow/`,
  tailwind: `// Multi-step checkout with progress indicator`
};

const CheckoutFlowDemo = () => {
  const { key, forceRerender } = useForceRerender();

  const handleComplete = (data) => {
    console.log('Checkout completed:', data);
    alert('Order completed! Check console for data.');
  };

  const props = [
    {
      name: 'onComplete',
      type: 'function',
      default: 'undefined',
      description: 'Completion handler - receives all form data'
    }
  ];

  return (
    <TabsLayout>
      <PreviewTab>
        <Box 
          minHeight={800} 
          position="relative" 
          className="demo-container" 
          overflow="auto"
          bg="black"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={8}
        >
          <CheckoutFlow
            key={key}
            onComplete={handleComplete}
          />
        </Box>

        <Customize forceRerender={forceRerender} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={checkoutFlowCode} />
        <Dependencies />
        <Box mt={6}>
          <PropTable data={props} />
        </Box>
      </CodeTab>
    </TabsLayout>
  );
};

export default CheckoutFlowDemo;
