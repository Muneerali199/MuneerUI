import { useState } from 'react';
import { CodeTab, PreviewTab, TabsLayout } from '../../components/common/TabsLayout';
import { Box, Flex, Button, Text } from '@chakra-ui/react';
import CodeExample from '../../components/code/CodeExample';
import PropTable from '../../components/common/Preview/PropTable';
import Dependencies from '../../components/code/Dependencies';
import AICodeBlock from '../../content/Components/AICodeBlock/AICodeBlock';

const AICodeBlockDemo = () => {
  const [language, setLanguage] = useState('javascript');

  const codeExamples = {
    javascript: `function greet(name) {
  console.log(\`Hello, \${name}!\`);
  return \`Welcome to MuneerUI\`;
}

greet('Developer');`,
    typescript: `interface User {
  name: string;
  age: number;
}

const greet = (user: User): string => {
  return \`Hello, \${user.name}!\`;
};`,
    python: `def greet(name):
    print(f"Hello, {name}!")
    return f"Welcome to MuneerUI"

greet("Developer")`,
    jsx: `import React from 'react';

function App() {
  return (
    <div className="app">
      <h1>Hello, MuneerUI!</h1>
    </div>
  );
}`
  };

  const propData = [
    {
      name: 'code',
      type: 'string',
      default: "''",
      description: 'The code string to display'
    },
    {
      name: 'language',
      type: 'string',
      default: "'javascript'",
      description: 'Programming language for syntax highlighting'
    },
    {
      name: 'filename',
      type: 'string',
      default: 'undefined',
      description: 'Optional filename to display'
    },
    {
      name: 'showLineNumbers',
      type: 'boolean',
      default: 'true',
      description: 'Show line numbers'
    },
    {
      name: 'theme',
      type: "'dark' | 'light'",
      default: "'dark'",
      description: 'Color theme'
    }
  ];

  const codeExample = {
    default: `import AICodeBlock from './AICodeBlock';

function App() {
  const code = \`function hello() {
  console.log("Hello World");
}\`;

  return (
    <AICodeBlock 
      code={code} 
      language="javascript"
      filename="example.js"
      showLineNumbers={true}
    />
  );
}`
  };

  return (
    <TabsLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" minH={400} p={6}>
          <Flex direction="column" gap={6}>
            <Flex gap={2} wrap="wrap">
              <Text fontSize="sm" color="#E0E0E0" w="100%" mb={2}>Language:</Text>
              {Object.keys(codeExamples).map(lang => (
                <Button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  bg={language === lang ? '#FFD700' : '#1a1a1a'}
                  color={language === lang ? '#000' : '#fff'}
                  _hover={{ bg: language === lang ? '#FFA500' : '#2a2a2a' }}
                  size="sm"
                >
                  {lang}
                </Button>
              ))}
            </Flex>

            <AICodeBlock 
              code={codeExamples[language]} 
              language={language}
              filename={`example.${language === 'python' ? 'py' : language}`}
              showLineNumbers={true}
            />
          </Flex>
        </Box>

        <PropTable data={propData} />
        <Dependencies dependencyList={[]} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={codeExample} />
      </CodeTab>
    </TabsLayout>
  );
};

export default AICodeBlockDemo;
