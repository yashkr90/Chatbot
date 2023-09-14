import React from "react";
import { useEffect } from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
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
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
