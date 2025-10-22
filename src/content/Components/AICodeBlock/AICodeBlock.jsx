import { useState } from 'react';
import './AICodeBlock.css';

const AICodeBlock = ({
  code = '',
  language = 'javascript',
  filename,
  showLineNumbers = true,
  theme = 'dark',
  className = ''
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const lines = code.split('\n');

  return (
    <div className={`ai-code-block ${theme} ${className}`}>
      <div className="code-header">
        <div className="code-header-left">
          <div className="code-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          {filename && <span className="code-filename">{filename}</span>}
          <span className="code-language">{language}</span>
        </div>
        <button 
          className={`code-copy-btn ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <div className="code-content">
        <pre className="code-pre">
          {showLineNumbers && (
            <div className="code-line-numbers">
              {lines.map((_, i) => (
                <div key={i} className="line-number">{i + 1}</div>
              ))}
            </div>
          )}
          <code className={`language-${language}`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default AICodeBlock;
