import config from '../bot/config';
import MessageParser from '../bot/MessageParser';
import ActionProvider from '../bot/ActionProvider';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css';
import './Chatbot.css';

const MyChatbot = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        // validator={validateInput}
      />
    </div>
  );
};

export default MyChatbot;