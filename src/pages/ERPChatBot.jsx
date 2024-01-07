import React, { useState } from 'react';
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';
//import 'react-chat-widget/lib/styles.css';

import styles from './index.module.css';


const ERPChatBot = () => {
  const [messages, setMessages] = useState([]);

  const handleNewUserMessage = (newMessage) => {
    // For simplicity, in this example, just echo back the user's message
    addUserMessage(newMessage);
    // Here, you can handle the ERP-related queries and provide responses accordingly
    // You might use NLP or predefined logic to match queries to relevant ERP information
    // For example:
    // if (newMessage.toLowerCase().includes('finance')) {
    //   addResponseMessage('Our ERP system provides robust finance management capabilities.');
    // } else if (newMessage.toLowerCase().includes('inventory')) {
    //   addResponseMessage('The ERP includes comprehensive inventory management features.');
    // } else {
    //   addResponseMessage('I'm sorry, I couldn't understand that. Please ask another question.');
    // }
  };

  return (
    <div>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="ERP ChatBot"
        subtitle="Ask me anything about our ERP system!"
      />
    </div>
  );
};

export default ERPChatBot;
