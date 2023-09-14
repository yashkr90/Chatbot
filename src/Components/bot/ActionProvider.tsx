import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
// import { useDispatch } from 'react-redux';
import { createChatBotMessage } from 'react-chatbot-kit';
// import TimeSlot from '../TimeSlot';

interface ActionProviderProps {
  createChatBotMessage: (message: string, options?: any) => any;
  setState: (prevState: any) => void; // Replace 'any' with the actual state type if known
  children: React.ReactNode;
}

const ActionProvider: React.FC<ActionProviderProps> = ({ createChatBotMessage, setState, children }) => {
  


  
    const navigate=useNavigate();

  //handle gotit When user click on Got It! button and displayes picka slot
    const handleGotIt = () => {
      console.log("gotit");
      const botMessages = [
        createChatBotMessage('Pick a slot !', { withAvatar: true,widget:"SlotTime" }),
      ];
      updateChatbotState(botMessages);
    };
  
    //handle slot Picking whn user selects date and time from calendar and display enter your name
    const handleSlotPicking = () => {
      const botMessages = [
        createChatBotMessage('Enter your Name', { withAvatar: true, widget:'inputName'}),
      ];
      updateChatbotState(botMessages);
    };
  
    // handle name input after user Enters name in input field and then asks for age and displays dropdown for age
    const handleNameInput = () => {
     
      const botMessages = [
        createChatBotMessage('Enter your Age', { withAvatar: true,widget:'selectAge' }),
      ];
      updateChatbotState(botMessages);
    };
  
    //handle Age when user selects age from dropdown , then displays Bot will exit ,along with timer
    const handleAgeInput = () => {
      
      
      const botMessages = [
        createChatBotMessage(`Thank you. In 5 seconds, bot will exit`, {
          withAvatar: true,
          widget:"thankyou"
        }),
      ];
      setTimeout(() => {

        console.log("exit");
        navigate("/page3")
      }, 5000);

      updateChatbotState(botMessages);
      
 
    };
  

  // update the State of chatbot message after every function
    const updateChatbotState = (messages:any) => {
      setState((prevState:any) => ({
        ...prevState,
        messages: [...prevState.messages, ...messages],
      }));
    };
    // console.log(setState);

  
    return (
      <div>
        {React.Children.map(children, (child:any) => {
          return React.cloneElement(child, {
            actions: {
              handleAgeInput,
              handleNameInput,
              handleSlotPicking,
              handleGotIt,
            },
          });
        })}
      </div>
    );
  };

 


export default ActionProvider;
