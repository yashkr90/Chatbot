import React, { useEffect, useState } from "react";

import { createClientMessage } from "react-chatbot-kit";

import { useDispatch } from "react-redux";
import { setUserAge } from "../../store/reducer/userInfo.ts";

// interface AgeSelectProps {
//   setState: React.Dispatch<React.SetStateAction<any>>; // Define the type for setState
//   actions: {
//     handleAgeInput: () => void;
//   };
// }

const AgeSelect = (props: any) => {
  const [selectedAge, setSelectedAge] = useState(""); // Initialize with an empty string
  const [hidden, setHidden] = useState(false);
  const dispatch = useDispatch();

  const handleAgeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const age = event.target.value; // Get the selected age from the dropdown
    setSelectedAge(age); // Update the state with the selected age
  };

  useEffect(() => {
    if (selectedAge !== "") {
      console.log("seleclted age", selectedAge);
      const userMessage: {
        message: string;
        type: string;
        id: number;
      } = createClientMessage(`${selectedAge}`, {});
      props.setState((prev: any) => ({
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
