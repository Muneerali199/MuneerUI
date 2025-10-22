import { useState } from 'react';
import { CodeTab, PreviewTab, TabsLayout } from '../../components/common/TabsLayout';
import { Box, Flex, Button } from '@chakra-ui/react';
import CodeExample from '../../components/code/CodeExample';
import PropTable from '../../components/common/Preview/PropTable';
import Dependencies from '../../components/code/Dependencies';
import ChatBubble from '../../content/Components/ChatBubble/ChatBubble';

const ChatBubbleDemo = () => {
  const [showTyping, setShowTyping] = useState(false);

  const propData = [
    {
      name: 'message',
      type: 'string',
      default: "''",
      description: 'The message text to display'
    },
    {
      name: 'sender',
      type: "'user' | 'ai'",
      default: "'user'",
      description: 'Who sent the message'
    },
    {
      name: 'avatar',
      type: 'string',
      default: 'undefined',
      description: 'URL for custom avatar image'
    },
    {
      name: 'timestamp',
      type: 'string',
      default: 'undefined',
      description: 'Timestamp to show on hover'
    },
    {
      name: 'isTyping',
      type: 'boolean',
      default: 'false',
      description: 'Show typing indicator animation'
    },
    {
      name: 'showAvatar',
      type: 'boolean',
      default: 'true',
      description: 'Whether to show the avatar'
    }
  ];

  const codeExample = {
    default: `import ChatBubble from './ChatBubble';

function App() {
  return (
    <div>
      <ChatBubble 
        message="Hello! How can I help you today?" 
        sender="ai" 
        timestamp="2:30 PM"
      />
      <ChatBubble 
        message="I need help with my project" 
        sender="user" 
        timestamp="2:31 PM"
      />
    </div>
  );
}`
  };

  return (
    <TabsLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" minH={400} p={6}>
          <Flex direction="column" gap={4} maxW="600px" mx="auto">
            <ChatBubble 
              message="Hello! I'm MuneerUI AI Assistant. How can I help you today?" 
              sender="ai" 
              timestamp="2:30 PM"
            />
            <ChatBubble 
              message="Can you help me build a chat interface?" 
              sender="user" 
              timestamp="2:31 PM"
            />
            <ChatBubble 
              message="Of course! I can help you create a beautiful chat interface with React. Would you like me to show you some examples?" 
              sender="ai" 
              timestamp="2:31 PM"
            />
            {showTyping && (
              <ChatBubble 
                sender="ai" 
                isTyping={true}
              />
            )}
          </Flex>

          <Button
            mt={6}
            onClick={() => setShowTyping(!showTyping)}
            bg="#1a1a1a"
            color="#fff"
            _hover={{ bg: '#2a2a2a' }}
          >
            {showTyping ? 'Hide' : 'Show'} Typing Indicator
          </Button>
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

export default ChatBubbleDemo;
