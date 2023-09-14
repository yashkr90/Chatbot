// InputName.js

import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { createChatBotMessage, createClientMessage } from "react-chatbot-kit";
import {useDispatch, useSelector} from 'react-redux';
import { setUserName } from "../../store/reducer/userInfo";

const NameInput = (props) => {
  const [name, setName] = useState(""); //state to store user name
  const [hidden, setHidden] = useState(false); // state to hide nameInput
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    if (name.trim() !== "") {
      console.log(name);
      const userMessage = createClientMessage(`${name}`);
      props.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, userMessage],
      }));

      // dispatch name
      dispatch(setUserName(name))
      props.actions.handleNameInput();
      setHidden(true);

      //   onNameSubmit(name);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      {hidden === false ? (
        <div className="d-flex flex-column align-items-center gap-2">
          <div>
            <input
              style={{
                // marginLeft:'px',
                background: "none",
                border: "none",
                borderBottom: "1px solid black", 
                color: "black",
                borderRadius: "5px",
                cursor: "pointer", 
              }}
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
          </div>

          <div>
            <Button
              size="sm"
              variant="outline-secondary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default NameInput;
