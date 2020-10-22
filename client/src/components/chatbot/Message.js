import React from 'react';

const Message = (props) => {
  return (
    <div className={props.speaks === 'me' ? 'text-align' : ''}>
      <div className={`chatbubble ${props.speaks === 'bot' ? 'bot' : 'me'}`}>
        <span>{props.text}</span>
      </div>
    </div>
  );
};

export default Message;
