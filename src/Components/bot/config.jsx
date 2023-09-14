import { createChatBotMessage, createClientMessage } from "react-chatbot-kit";
import Gotit from "../widgets/Gotit";
import TimeSlot from "../widgets/TimeSlot";
import NameInput from "../widgets/NameInput";
import AgeSelect from "../widgets/AgeSelect";
import ThankYou from "../widgets/ThankYou";

const customStyles = {
  // Customize the styles of the bot's message container
  botMessageBox: {
    // backgroundColor: 'white',
    borderRadius: "10px",
    padding: "10px",
  },
  // Customize the styles of the chat button
  chatButton: {
    // backgroundColor: 'blue',
    color: "white",
    borderRadius: "5px",
    border: "none",
  },
};

const Config = {
  botName: "StudentBot",
  lang: "en",

  initialMessages: [
    createChatBotMessage("Hello, Welcome to student info system!", {
      withAvatar: true, // Enable avatars for system messages
      widget: "gotit",
      delay: 3000,
    }),
  ],
  customStyles: customStyles, // Set your custom styles here
  state: {
    user: "",
    age: "",
  },
  customComponents: {},
  customMessages: {},

  // widgets for all  criteria
  widgets: [
    {
      widgetName: "gotit",
      widgetFunc: (props) => <Gotit {...props} />,
    },
    {
      widgetName: "SlotTime",
      widgetFunc: (props) => <TimeSlot {...props} />,
    },
    {
      widgetName: "inputName",
      widgetFunc: (props) => <NameInput {...props} />,
    },
    {
      widgetName: "selectAge",
      widgetFunc: (props) => <AgeSelect {...props} />,
    },
    {
      widgetName: "thankyou",
      widgetFunc: (props) => <ThankYou {...props} />,
    },
  ],
};

export default Config;
