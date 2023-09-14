import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate();

    const handleClick=()=>{
        navigate("/chatbot")

    }

  return (
    <>
    <div className='d-flex flex-column align-items-center'>

    <div>
        Enter into Student Info System
    </div>
    <div>
        <Button variant='outline-primary' onClick={handleClick}>
            Enroll now
        </Button>
    </div>
    </div>
    </>
  )
}

export default Home;