import { useState, useEffect, useRef } from 'react';
import './CommandPalette.css';

const CommandPalette = ({
  isOpen = false,
  onClose,
  commands = [],
  placeholder = 'Type a command...',
  onExecute,
  className = ''
}) => {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const filteredCommands = commands.filter(cmd =>
    cmd.name.toLowerCase().includes(search.toLowerCase()) ||
    cmd.description?.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < filteredCommands.length - 1 ? prev + 1 : prev
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : 0);
      } else if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
        e.preventDefault();
        handleExecute(filteredCommands[selectedIndex]);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, onClose]);

  const handleExecute = (command) => {
    onExecute?.(command);
    setSearch('');
    onClose?.();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="command-palette-overlay" onClick={onClose} />
      <div className={`command-palette ${className}`}>
        <div className="command-search-wrapper">
          <svg className="command-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <input
            ref={inputRef}
            type="text"
            className="command-search-input"
            placeholder={placeholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <kbd className="command-esc">ESC</kbd>
        </div>

        <div className="command-results">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd, index) => (
              <div
                key={cmd.id || index}
                className={`command-item ${index === selectedIndex ? 'selected' : ''}`}
                onClick={() => handleExecute(cmd)}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                {cmd.icon && (
                  <div className="command-icon">
                    {typeof cmd.icon === 'string' ? (
                      <span>{cmd.icon}</span>
                    ) : (
                      cmd.icon
                    )}
                  </div>
                )}
                <div className="command-content">
                  <div className="command-name">{cmd.name}</div>
                  {cmd.description && (
                    <div className="command-description">{cmd.description}</div>
                  )}
                </div>
                {cmd.shortcut && (
                  <div className="command-shortcut">
                    {cmd.shortcut.split('+').map((key, i) => (
                      <kbd key={i}>{key}</kbd>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="command-empty">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="16" r="1" fill="currentColor"/>
              </svg>
              <p>No commands found</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CommandPalette;
