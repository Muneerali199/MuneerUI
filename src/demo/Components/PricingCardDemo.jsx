import { CodeTab, PreviewTab, TabsLayout } from '../../components/common/TabsLayout';
import { Box } from '@chakra-ui/react';
import PropTable from '../../components/common/Preview/PropTable';
import CodeExample from '../../components/code/CodeExample';
import Dependencies from '../../components/code/Dependencies';
import Customize from '../../components/common/Preview/Customize';
import useForceRerender from '../../hooks/useForceRerender';
import PricingCard from '../../ts-tailwind/Components/PricingCard/PricingCard';

const pricingCardCode = {
  usage: `import PricingCard from './PricingCard';

<PricingCard
  plan="Pro"
  price="49"
  period="month"
  features={[
    "Unlimited Projects",
    "Priority Support",
    "Advanced Analytics",
    "Custom Domain",
    "Team Collaboration"
  ]}
  highlighted={true}
  onSelect={() => console.log('Selected')}
/>`,
  code: `// Component code available in ts-tailwind/Components/PricingCard/`,
  tailwind: `// Premium pricing card with TailwindCSS`
};

const PricingCardDemo = () => {
  const { key, forceRerender } = useForceRerender();

  const props = [
    {
      name: 'plan',
      type: 'string',
      default: 'Pro',
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
      name: 'features',
      type: 'array',
      default: '[]',
      description: 'List of features'
    },
    {
      name: 'highlighted',
      type: 'boolean',
      default: 'false',
      description: 'Highlight as popular'
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
          height={600} 
          position="relative" 
          className="demo-container" 
          overflow="auto"
          bg="black"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={6}
          p={8}
          flexWrap="wrap"
        >
          <PricingCard
            key={key}
            plan="Starter"
            price="19"
            period="month"
            features={[
              "5 Projects",
              "Email Support",
              "Basic Analytics",
              "1 Team Member"
            ]}
            onSelect={() => alert('Starter plan selected!')}
          />
          
          <PricingCard
            key={key}
            plan="Pro"
            price="49"
            period="month"
            features={[
              "Unlimited Projects",
              "Priority Support",
              "Advanced Analytics",
              "Custom Domain",
              "Team Collaboration"
            ]}
            highlighted={true}
            onSelect={() => alert('Pro plan selected!')}
          />
          
          <PricingCard
            key={key}
            plan="Enterprise"
            price="99"
            period="month"
            features={[
              "Everything in Pro",
              "Dedicated Support",
              "Custom Integration",
              "SLA Guarantee",
              "Advanced Security"
            ]}
            onSelect={() => alert('Enterprise plan selected!')}
          />
        </Box>

        <Customize forceRerender={forceRerender} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={pricingCardCode} />
        <Dependencies />
        <Box mt={6}>
          <PropTable data={props} />
        </Box>
      </CodeTab>
    </TabsLayout>
  );
};

export default PricingCardDemo;
