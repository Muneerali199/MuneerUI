import { useState } from 'react';
import './ChatBubble.css';

const ChatBubble = ({
  message = '',
  sender = 'user',
  avatar,
  timestamp,
  isTyping = false,
  showAvatar = true,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const isUser = sender === 'user';
  const isAI = sender === 'ai';

  return (
    <div 
      className={`chat-bubble-container ${isUser ? 'user' : 'ai'} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isUser && showAvatar && (
        <div className="chat-avatar">
          {avatar ? (
            <img src={avatar} alt="AI Avatar" />
          ) : (
            <div className="chat-avatar-default ai">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </div>
      )}

      <div className={`chat-bubble ${isUser ? 'user' : 'ai'}`}>
        {isTyping ? (
          <div className="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          <>
            <div className="chat-message">{message}</div>
            {timestamp && (
              <div className={`chat-timestamp ${isHovered ? 'visible' : ''}`}>
                {timestamp}
              </div>
            )}
          </>
        )}
      </div>

      {isUser && showAvatar && (
        <div className="chat-avatar">
          {avatar ? (
            <img src={avatar} alt="User Avatar" />
          ) : (
            <div className="chat-avatar-default user">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
