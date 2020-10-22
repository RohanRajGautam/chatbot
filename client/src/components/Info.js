import React from 'react';

const Info = () => (
  <div className='card'>
    <div className='card-image'>
      <img src='bot.jpeg' alt='bot' />
      <span className='card-title'>Hello!</span>
    </div>
    <div className='card-content'>
      <p>
        This is a simple chatbot built using DialogFlow. You can try asking him
        questions about me like my likes, dislikes and academics. You can also
        ask the bot for its name and have small talk with it. I'll add more
        training phrases whenever I find some time. Don't forget to say bye
        before leaving :D
      </p>
    </div>
  </div>
);

export default Info;
