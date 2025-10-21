import { CodeTab, PreviewTab, TabsLayout } from '../../components/common/TabsLayout';
import { Box } from '@chakra-ui/react';
import PropTable from '../../components/common/Preview/PropTable';
import CodeExample from '../../components/code/CodeExample';
import Dependencies from '../../components/code/Dependencies';
import Customize from '../../components/common/Preview/Customize';
import useForceRerender from '../../hooks/useForceRerender';
import PaymentForm from '../../ts-tailwind/Components/PaymentForm/PaymentForm';

const paymentFormCode = {
  usage: `import PaymentForm from './PaymentForm';

<PaymentForm
  onSubmit={(data) => {
    console.log('Payment data:', data);
    // Process payment
  }}
/>`,
  code: `// Component code available in ts-tailwind/Components/PaymentForm/`,
  tailwind: `// Interactive payment form with 3D card preview`
};

const PaymentFormDemo = () => {
  const { key, forceRerender } = useForceRerender();

  const handleSubmit = (data) => {
    console.log('Payment submitted:', data);
    alert('Payment form submitted! Check console for data.');
  };

  const props = [
    {
      name: 'onSubmit',
      type: 'function',
      default: 'undefined',
      description: 'Form submission handler - receives form data'
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
          <PaymentForm
            key={key}
            onSubmit={handleSubmit}
          />
        </Box>

        <Customize forceRerender={forceRerender} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={paymentFormCode} />
        <Dependencies />
        <Box mt={6}>
          <PropTable data={props} />
        </Box>
      </CodeTab>
    </TabsLayout>
  );
};

export default PaymentFormDemo;
