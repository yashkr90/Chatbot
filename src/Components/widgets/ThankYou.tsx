import React, { useState, useEffect } from 'react';

const ThankYou = (props:any) => {
  const [countdown, setCountdown] = useState<number>(5);

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown === 0) {
        clearInterval(timer); // Stop the timer when countdown reaches zero
        // onFinish(); // Trigger the onFinish callback to transition to page 3
      } else {
        setCountdown((prevCountdown) => prevCountdown - 1); // Decrement the countdown
      }
    }, 1000); // Update countdown every second

    return () => {
      clearInterval(timer); // Cleanup the timer when the component unmounts
    };
  }, [countdown]);

  return (
    <div className='d-flex align-items-center justify-content-center'>

      <div style={{color:'red',fontSize:'12px'}}> {countdown} </div>
    </div>
  )
};

export default ThankYou;
