import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import {  createClientMessage } from "react-chatbot-kit";



const Gotit = (props:any) => {
    // console.log(props);
    const [hidden,setHidden]= useState<boolean>(false)

    const handleClick=()=>{
            const userMessage: {
              message: string;
              type: string;
              id: number;
          } =createClientMessage("Got it!",{});
            props.setState((prev: { messages: string }) => ({
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