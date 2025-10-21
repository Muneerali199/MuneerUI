import { CodeTab, PreviewTab, TabsLayout } from '../../components/common/TabsLayout';
import { Box } from '@chakra-ui/react';
import PropTable from '../../components/common/Preview/PropTable';
import CodeExample from '../../components/code/CodeExample';
import Dependencies from '../../components/code/Dependencies';
import Customize from '../../components/common/Preview/Customize';
import useForceRerender from '../../hooks/useForceRerender';
import PremiumPricingCard from '../../ts-tailwind/Components/PremiumPricingCard/PremiumPricingCard';

const premiumPricingCardCode = {
  usage: `import PremiumPricingCard from './PremiumPricingCard';

<PremiumPricingCard
  plan="Professional"
  price="49"
  period="month"
  description="Perfect for growing teams"
  features={[
    { name: "Unlimited projects", included: true },
    { name: "Advanced analytics", included: true },
    { name: "Priority support", included: true },
    { name: "Custom integrations", included: true },
    { name: "Dedicated account manager", included: false }
  ]}
  highlighted={true}
  badge="POPULAR"
  onSelect={() => console.log('Selected')}
/>`,
  code: `// Component code available in ts-tailwind/Components/PremiumPricingCard/`,
  tailwind: `// Ultra-modern pricing card inspired by Huly.io`
};

const PremiumPricingCardDemo = () => {
  const { key, forceRerender } = useForceRerender();

  const props = [
    {
      name: 'plan',
      type: 'string',
      default: 'Professional',
      description: 'Plan name'
    },
    {
      name: 'price',
      type: 'string',
      default: '49',
      description: 'Price amount'
    },
    {
      name: 'period',
      type: 'string',
      default: 'month',
      description: 'Billing period'
    },
    {
      name: 'description',
      type: 'string',
      default: 'Perfect for growing teams',
      description: 'Plan description'
    },
    {
      name: 'features',
      type: 'array',
      default: '[{name, included}]',
      description: 'List of features with inclusion status'
    },
    {
      name: 'highlighted',
      type: 'boolean',
      default: 'false',
      description: 'Highlight as recommended plan'
    },
    {
      name: 'badge',
      type: 'string',
      default: 'null',
      description: 'Badge text (e.g., "POPULAR")'
    },
    {
      name: 'onSelect',
      type: 'function',
      default: 'undefined',
      description: 'Selection handler'
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
          bg="linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={8}
          p={12}
          flexWrap="nowrap"
        >
          <PremiumPricingCard
            key={`${key}-starter`}
            plan="Starter"
            price="19"
            period="month"
            description="Perfect for individuals and small projects"
            features={[
              { name: "5 projects", included: true },
              { name: "Basic analytics", included: true },
              { name: "Email support", included: true },
              { name: "Custom integrations", included: false },
              { name: "Priority support", included: false }
            ]}
            onSelect={() => alert('Starter plan selected!')}
          />
          
          <PremiumPricingCard
            key={`${key}-pro`}
            plan="Professional"
            price="49"
            period="month"
            description="Perfect for growing teams and businesses"
            features={[
              { name: "Unlimited projects", included: true },
              { name: "Advanced analytics", included: true },
              { name: "Priority support", included: true },
              { name: "Custom integrations", included: true },
              { name: "Dedicated account manager", included: false }
            ]}
            highlighted={true}
            badge="POPULAR"
            onSelect={() => alert('Professional plan selected!')}
          />
          
          <PremiumPricingCard
            key={`${key}-enterprise`}
            plan="Enterprise"
            price="99"
            period="month"
            description="For large organizations with advanced needs"
            features={[
              { name: "Unlimited everything", included: true },
              { name: "Advanced analytics", included: true },
              { name: "24/7 phone support", included: true },
              { name: "Custom integrations", included: true },
              { name: "Dedicated account manager", included: true }
            ]}
            badge="BEST VALUE"
            onSelect={() => alert('Enterprise plan selected!')}
          />
        </Box>

        <Customize forceRerender={forceRerender} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={premiumPricingCardCode} />
        <Dependencies />
        <Box mt={6}>
          <PropTable data={props} />
        </Box>
      </CodeTab>
    </TabsLayout>
  );
};

export default PremiumPricingCardDemo;
