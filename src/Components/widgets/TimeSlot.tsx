import React, { useState, useRef, useEffect } from "react";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

import ToggleButton from "react-bootstrap/ToggleButton";

import { createClientMessage } from "react-chatbot-kit";

import { useDispatch } from "react-redux";
import { setUserTime } from "../../store/reducer/userInfo";

const today = new Date();
const options: Intl.DateTimeFormatOptions = { weekday: "short", month: "short", day: "numeric" };
// const todayDate = today.toLocaleDateString(undefined, options).toUpperCase();

// Calculate the end of the current month
const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
// const endOfMonthDate = endOfMonth.toLocaleDateString(undefined, options);

// Calculate the dates in between
const dates: { name: Date; value: number }[] = [];
let currentDate = today;

while (currentDate <= endOfMonth) {
  dates.push({ name: new Date(currentDate), value: dates.length + 1 });
  currentDate.setDate(currentDate.getDate() + 1);
}

// for (let i = 0; i < dates.length; i++) {
//   console.log(dates[i]);
// }

const morning = [
  { name: "09:00AM", value: "1" },
  { name: "10:00AM", value: "2" },
  { name: "11:00AM", value: "3" },
  { name: "12:00AM", value: "4" },
];

const noon = [
  { name: "02:00PM", value: "5" },
  { name: "03:00PM", value: "6" },
  { name: "04:00PM", value: "7" },
  { name: "05:00PM", value: "8" },
];

const timeStyle = {
  width: "50px",
  height: "30px",
  fontSize: "9.5px",
  WebkitBoxShadow: "0px 2px 2px 0px rgba(153, 153, 153, 1)",
  MozBoxShadow: "0px 2px 2px 0px rgba(153, 153, 153, 1)",
  boxShadow: "rgba(0, 0, 0, 0.57) 0px 2px 2px 0px",
};

const dateStyle = {
  width: "60px",
  height: "30px",
  fontSize: "10px",
  WebkitBoxShadow: "2px 2px 2px 0px rgba(153, 153, 153, 1)",
  MozBoxShadow: "2px 2px 2px 0px rgba(153, 153, 153, 1)",
  boxShadow: "rgba(0, 0, 0, 0.57) 2px 2px 2px 0px",
};

const TimeSlot = (props: any) => {
  const dispatch = useDispatch();

  const [dateTime, setDateTime] = useState({
    date: "",
    time: "",
  });

  const [hidden, setHidden] = useState(false);
  const [timeValue, setTimeValue] = useState(""); //set time value controlled radio
  const [dateValue, setDateValue] = useState<any>(); //set date value for controlled radio

  const navRef = useRef<HTMLDivElement | null>(null);

  const handleNav = (direction: string) => {
    if (navRef.current) {
      if (direction === "left") {
        navRef.current.scrollLeft -= 200;
      } else {
        navRef.current.scrollLeft += 200;
      }
    }
  };

  const handleClick = (e:any, names: string) => {
    console.log(e);
    
    const value = e.target.textContent;
    const name = names;
    console.log(e);
    // const settingDateTime= {..., [name]:value }
    console.log(name);

    setDateTime((prev) => {
      return { ...prev, [name]: value };
    });

    console.log(dateTime);
  };

  useEffect(() => {
    // Check if both date and time have values
    if (dateTime.date !== "" && dateTime.time !== "") {
      setTimeout(() => {
        // create client side message of date and time
        const userMessage: {
          loading?: boolean | undefined;
          widget?: string | undefined;
          delay?: number | undefined;
          payload?: any;
          message: string;
          type: string;
          id: number;
        } = createClientMessage(`${dateTime.date} ${dateTime.time}`,{});


        props.setState((prev: { messages: any }) => ({
          ...prev,
          messages: [...prev.messages, userMessage],
        }));

        console.log(userMessage);

        //dispatch date and time as string

        dispatch(setUserTime(`${dateTime.date} ${dateTime.time}`));
        props.actions.handleSlotPicking();
        setHidden(true);
      }, 1000);
    }
  }, [dateTime]);

  return (
    <>
      {hidden === false ? (
        <div className="d-flex flex-column justify-content-between mt-4">
          <div className="menu-container d-flex justify-content-between">
            <div>
              <BsArrowLeftCircle onClick={() => handleNav("left")} />
            </div>

            <div
              className="nav-items"
              style={{ overflow: "hidden", whiteSpace: "nowrap" }}
              ref={navRef}
            >
              {dates.map((date) => {
                return (
                  <ToggleButton
                    key={date.name.toLocaleDateString(undefined, options)}
                    id={`date-${date.value}`}
                    type="radio"
                    variant="outline-primary"
                    name="dd"
                    onClick={(e) => handleClick(e, "date")}
                    size="sm"
                    className="mx-1"
                    style={dateStyle}
                    value={date.value}
                    checked={dateValue == date.value}
                    onChange={(e) => {
                      console.log(e.currentTarget);
                      return setDateValue(e.currentTarget.value);
                    }}
                  >
                    <div className="d-flex flex-row justify-content-center align-items-center align-content-center">
                      {date.name.toLocaleDateString(undefined, options)}
                    </div>
                  </ToggleButton>
                );
              })}
            </div>
            <div>
              <BsArrowRightCircle onClick={() => handleNav("right")} />
            </div>
          </div>

          <div className="mt-4">
            <div className="d-flex flex-column gap-2">
              <div className="d-flex flex-column flex-start gap-2">
                <span style={{ fontSize: "12px" }}>Morning</span>
                <div className="d-flex gap-2">
                  {morning.map((time, idx) => {
                    return (
                      <ToggleButton
                        key={idx}
                        id={`time-${time.value}`}
                        type="radio"
                        variant="outline-secondary"
                        name="time"
                        onClick={(e) => handleClick(e, "time")}
                        style={timeStyle}
                        // variant="outline-secondary"
                        size="sm"
                        value={time.value}
                        checked={timeValue === time.value}
                        onChange={(e) => setTimeValue(e.currentTarget.value)}
                      >
                        <div className="d-flex justify-content-center align-content-center">
                          {time.name}
                        </div>
                      </ToggleButton>
                    );
                  })}
                  {/* </ToggleButtonGroup> */}
                </div>
              </div>
              <div className="d-flex flex-column flex-start gap-2">
                <span style={{ fontSize: "12px" }}>Noon</span>
                <div className="d-flex gap-2">
                  {noon.map((time, idx) => {
                    return (
                      <ToggleButton
                        key={idx}
                        id={`time-${time.value}`}
                        type="radio"
                        variant="outline-secondary"
                        name="time"
                        onClick={(e) => handleClick(e, "time")}
                        style={timeStyle}
                        // variant="outline-secondary"
                        size="sm"
                        value={time.value}
                        checked={timeValue === time.value}
                        onChange={(e) => setTimeValue(e.currentTarget.value)}
                      >
                        {time.name}
                      </ToggleButton>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        " "
      )}
    </>
  );
};

export default TimeSlot;
