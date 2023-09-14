import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { createChatBotMessage, createClientMessage } from "react-chatbot-kit";

const Gotit = (props) => {
    // console.log(props);
    const [hidden,setHidden]= useState(false)

    const handleClick=()=>{
            const userMessage =createClientMessage("Got it!");
            props.setState((prev) => ({
              ...prev,
              messages: [...prev.messages, userMessage],
            }));
        props.actions.handleGotIt();
        setHidden(true);
    }
  return (
    <>
    {hidden===false ?

    <div className='d-flex justify-content-center'>

      <Button variant='outline-primary' onClick={handleClick} style={{borderRadius:'20px'}}> Got it!</Button>
    </div>
    :''}
    
    </>
  )
}

export default Gotit