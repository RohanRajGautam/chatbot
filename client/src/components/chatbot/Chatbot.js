import React, { useState } from 'react';
import axios from 'axios';
import Message from './Message';
// import Card from './Card';


const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  async df_text_query(text) {
    let says = {
        speaks: 'me',
        msg: {
            text: {
                text: text
            }
        }
    }
    
    setMessages({messages: [...messages, says]})
    const res = await axios.post('/api/df_text_query', {text})

    for(let msg of res.data.fulfillmentMessages) {
      says = {
        speaks: 'bot',
        msg
      }
      setMessages({messages: [...messages, says]})
    }
  }

  async df_event_query(event) {
    const res = await axios.post('/api/df_event_query', {event});

    for(let msg of res.data.fulfillmentMessages){
      let says = {
        speaks: 'me',
        msg
      }
      setMessages({messages: [...messages, says]})
    }
  }

  renderMessages(stateMessages) {
    if(stateMessages) {
      return stateMessages.map((message, i) => {
        return <Message key={i} speaks={message.speaks} text={message.msg.text.text} />
      })
    } else {
      return null;
    }
  }

  return (
    <div style={{ height: 400, width: 400, float: 'right' }}>
        <div
        id='chatbot'
        style={{
            height: '100%',
            width: '100%',
            overflow: 'auto',
        }}
        >
        <h2>Chatbot</h2>
        {renderMessages(messages)}
        <input type='text' />
        </div>
    </div>
  )
};

export default Chatbot;
