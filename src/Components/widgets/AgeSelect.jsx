import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { createChatBotMessage, createClientMessage } from "react-chatbot-kit";
import { useDispatch, useSelector } from "react-redux";
import { setUserAge } from "../../store/reducer/userInfo";

const AgeSelect = (props) => {
  const [selectedAge, setSelectedAge] = useState(""); // Initialize with an empty string
  const [hidden, setHidden] = useState(false);
  const dispatch = useDispatch();

  const handleAgeChange = (event) => {
    const age = event.target.value; // Get the selected age from the dropdown
    setSelectedAge(age); // Update the state with the selected age
  };

  useEffect(() => {
    if (selectedAge !== "") {
      console.log("seleclted age", selectedAge);
      const userMessage = createClientMessage(`${selectedAge}`);
      props.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, userMessage],
      }));

      // dipatch age 
      dispatch(setUserAge(selectedAge));

      props.actions.handleAgeInput();
      setHidden(true);
    }
  }, [selectedAge]);


  // return dropdown for age 
  return (
    <>
      {hidden === false ? (
        <div className="d-flex justify-content-center">
          <select
            value={selectedAge}
            onChange={handleAgeChange}
            style={{ background: "" }}
          >
            <option value="">Select age</option>
            {Array.from({ length: 23 }, (_, index) => (
              <option key={index} value={18 + index}>
                {18 + index}
              </option>
            ))}
          </select>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AgeSelect;
