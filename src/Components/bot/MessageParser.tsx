import React from "react";


interface MessageParserProps {
  children: React.ReactNode;
  actions: {
    handleGotIt: () => void; 
    handleSlotPicking: () => void; 
    handleNameInput: () => void; 
    handleAgeInput: () => void; 
    
  };
}

const MessageParser: React.FC<MessageParserProps>  = ({ children, actions }) => {
  const parse = (message:string) => {
    if (message.includes("Got it!")) {
      actions.handleGotIt();
    } else if (message.includes("Pick a slot !")) {
      actions.handleSlotPicking();
    } else if (message.includes("Enter your Name")) {
      actions.handleNameInput();
    } else if (message.includes("Enter your Age")) {
      actions.handleAgeInput();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child:any) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
