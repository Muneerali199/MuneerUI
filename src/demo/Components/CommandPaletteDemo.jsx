import { useState } from 'react';
import { CodeTab, PreviewTab, TabsLayout } from '../../components/common/TabsLayout';
import { Box, Button } from '@chakra-ui/react';
import CodeExample from '../../components/code/CodeExample';
import PropTable from '../../components/common/Preview/PropTable';
import Dependencies from '../../components/code/Dependencies';
import CommandPalette from '../../content/Components/CommandPalette/CommandPalette';

const CommandPaletteDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const commands = [
    { id: 1, name: 'New Chat', description: 'Start a new conversation', icon: '💬', shortcut: 'Ctrl+N' },
    { id: 2, name: 'Settings', description: 'Open settings panel', icon: '⚙️', shortcut: 'Ctrl+,' },
    { id: 3, name: 'Search', description: 'Search through messages', icon: '🔍', shortcut: 'Ctrl+F' },
    { id: 4, name: 'Export Chat', description: 'Export conversation history', icon: '📥', shortcut: 'Ctrl+E' },
    { id: 5, name: 'Clear History', description: 'Clear all messages', icon: '🗑️', shortcut: 'Ctrl+D' },
    { id: 6, name: 'Toggle Theme', description: 'Switch between light and dark mode', icon: '🌓', shortcut: 'Ctrl+T' },
    { id: 7, name: 'Help', description: 'View help documentation', icon: '❓', shortcut: 'Ctrl+H' },
  ];

  const handleExecute = (command) => {
    console.log('Executing:', command.name);
  };

  const propData = [
    {
      name: 'isOpen',
      type: 'boolean',
      default: 'false',
      description: 'Controls visibility of the palette'
    },
    {
      name: 'onClose',
      type: 'function',
      default: 'undefined',
      description: 'Callback when palette closes'
    },
    {
      name: 'commands',
      type: 'array',
      default: '[]',
      description: 'Array of command objects'
    },
    {
      name: 'placeholder',
      type: 'string',
      default: "'Type a command...'",
      description: 'Search input placeholder'
    },
    {
      name: 'onExecute',
      type: 'function',
      default: 'undefined',
      description: 'Callback when command is executed'
    }
  ];

  const codeExample = {
    default: `import CommandPalette from './CommandPalette';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const commands = [
    { name: 'New Chat', icon: '💬', shortcut: 'Ctrl+N' },
    { name: 'Settings', icon: '⚙️', shortcut: 'Ctrl+,' }
  ];

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Command Palette
      </button>
      <CommandPalette 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        commands={commands}
        onExecute={(cmd) => console.log(cmd)}
      />
    </>
  );
}`
  };

  return (
    <TabsLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" minH={400} p={6} display="flex" alignItems="center" justifyContent="center">
          <Button
            onClick={() => setIsOpen(true)}
            bg="#FFD700"
            color="#000"
            size="lg"
            _hover={{ bg: '#FFA500' }}
          >
            Open Command Palette (Press ESC to close)
          </Button>

          <CommandPalette 
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            commands={commands}
            placeholder="Search commands..."
            onExecute={handleExecute}
          />
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

export default CommandPaletteDemo;
