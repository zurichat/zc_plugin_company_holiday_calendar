import React, { useState } from "react";
import "./Repeat.css";
import "./Modal.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

const weekDays = [
  {
    day: "Monday",
    icon: "M",
  },
  {
    day: "Tuesday",
    icon: "T",
  },
  {
    day: "Wednesday",
    icon: "W",
  },
  {
    day: "Thursday",
    icon: "T",
  },
  {
    day: "Friday",
    icon: "F",
  },
  {
    day: "Saturday",
    icon: "S",
  },
  {
    day: "Sunday",
    icon: "S",
  },
];

const everyStyles = {
  menuList: (styles) => ({
    ...styles,
    background: "white",
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    "&:hover": {
      backgroundColor: "#ACFFE6;",
    },

    zIndex: 1,

    // color: 'black',
    backgroundColor: "white",
    color: "#616061",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "13px",
    lineHeight: "130%",
  }),
  menu: (base) => ({
    ...base,
    zIndex: 100,
    width: "67%",
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: "#F6F6F6;",
    border: 0,
    boxShadow: "none",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  container: (base) => ({
    ...base,
    width: "20px",
  }),
};

const every = [
  {
    value: 1,
    label: "Days",
  },
  {
    value: 2,
    label: "Week",
  },
  {
    value: 2,
    label: "Month",
  },
  {
    value: 2,
    label: "Years",
  },
];

const Repeat = () => {
  const [frequent, setFrequent] = useState("Repeat");
  const [ifOption, setIfOption] = useState(false);
  const [occurrence, setOccurrence] = useState("1");
  const [showCustom, setShowCustom] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [repeatEvery, setRepeatEvery] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="select-container">
        <form action="" onSubmit={handleSubmit}>
          <div className="align">
            <div className="dropdown">
              <button
                className="dropbtn"
                onClick={() => {
                  setIfOption(!ifOption);
                }}
              >
                <i className=" icons fal fa-sync"></i>
                {frequent}
                <i className="icons fas fa-caret-down"></i>
              </button>
              <div
                className="dropdown-content"
                style={{ display: `${ifOption ? "block" : "none"}` }}
              >
                <option
                  value="Do not repeat"
                  onClick={() => setFrequent("Do not repeat")}
                >
                  Do not repeat
                </option>
                <option value="Daily" onClick={() => setFrequent("Daily")}>
                  Daily
                </option>
                <option value="Weekly" onClick={() => setFrequent("Weekly")}>
                  {" "}
                  Weekly on Wednesday
                </option>
                <option value="Monthly" onClick={() => setFrequent("Monthly")}>
                  Monthly
                </option>
                <option value="Yearly" onClick={() => setFrequent("Yearly")}>
                  Yearly
                </option>
                <option value="" onClick={() => setFrequent("Every week day ")}>
                  Every week day
                </option>
                <option
                  value="Custom"
                  onClick={() => {
                    setFrequent("Custom");
                    setShowCustom(!showCustom);
                    setIfOption(!ifOption);
                  }}
                >
                  Custom...
                </option>
              </div>
              {showCustom && (
                <div className="cover">
                  {/* everything related to the custom ocurrence goes here*/}

                  <div className="repeat-every">
                    <p id="repeat-every">Repeat every</p>
                    <p id="repeat-every-1">1</p>
                  </div>
                  <Select
                    id="select-repeat-every"
                    names="colors"
                    value={repeatEvery}
                    placeholder={"Week"}
                    styles={everyStyles}
                    options={every}
                    onChange={(everyObj) => setRepeatEvery(everyObj)}
                  />

                  <div className=""></div>
                  <div className="repeat_days">
                    <p className="block_title">Repeat on</p>
                    <div className="day_checkbox">
                      {weekDays.map((weekday, index) => (
                        <div key={index}>
                          <label className="custom-radio" htmlFor={weekday.day}>
                            {weekday.icon}
                            <input
                              key={Math.random()}
                              type="checkbox"
                              name="days_of_week"
                              id={weekday.day}
                              className="days__input"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="ends-opt">Ends</div>
                  <label htmlFor="radio" className="radio-btn">
                    <input
                      type="radio"
                      name="radio"
                      id="radio"
                      className="radio__input"
                    />
                    <div className="radio__circle"></div>
                    Never
                  </label>

                  <br />
                  <label htmlFor="radios" className="radio-btn">
                    <input
                      type="radio"
                      name="radio"
                      id="radios"
                      className="radio__input"
                    />
                    <div className="radio__circle"></div>
                    On
                  </label>
                  <br />
                  <label htmlFor="radioss" className="radio-btn">
                    <input
                      type="radio"
                      name="radio"
                      id="radioss"
                      className="radio__input"
                    />
                    <div className="radio__circle"></div>
                    After
                  </label>

                  <br />
                  <DatePicker
                    id="repeat-on-particular-day"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="MMM dd, yyyy"
                  />
                  <div className="other_details">
                    <input
                      value={occurrence}
                      onChange={(e) => setOccurrence(e.target.value)}
                      className="after_picker"
                      type="number"
                      name=""
                    />
                    <p>Occurrence{occurrence > 1 && "s"}</p>
                  </div>
                  <div className="main-btn">
                    <button className="cancel">Cancel</button>
                    <button className="done">Done</button>
                  </div>
                  {/* write your code above */}
                </div>
              )}
            </div>
            <label className="day">
              <input type="checkbox" className="m-5"></input>
              All day
            </label>
          </div>
          <button className="save">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Repeat;
