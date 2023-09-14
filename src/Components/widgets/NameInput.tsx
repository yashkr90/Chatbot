// InputName.js

import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import {  createClientMessage } from "react-chatbot-kit";
import {useDispatch} from 'react-redux';
import { setUserName } from "../../store/reducer/userInfo";

const NameInput = (props:any) => {
  const [name, setName] = useState<string>(""); //state to store user name
  const [hidden, setHidden] = useState<boolean>(false); // state to hide nameInput
  const dispatch = useDispatch();

  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    if (name.trim() !== "") {
      console.log(name);
      const userMessage: {
        message: string;
        type: string;
        id: number;
    } = createClientMessage(`${name}`,{});
      props.setState((prev: { messages: string }) => ({
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
  const handleKeyPress = (event: { key: string; }) => {
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
