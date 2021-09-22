import React, { useState } from "react";
import "./CustomRecurrence.css";
import DateInput from "./DateInput";

function CustomRecurrence() {
  const [daysTag, setDaysTag] = useState("1");
  const [occurrence, setOccurrence] = useState("1");
  const [pickDate, setPickDate] = useState(new Date())
  const [isRadioClicked, setIsRadioClicked] = useState()

  console.log(pickDate)

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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

  return (
    <div className="custom_recurrence_modal">
      <h4>Custom recurrence</h4>
      <form action="" onSubmit={handleSubmit}>
        <div className="repeat_frequency">
          <p className="block_title">Repeat every</p>
          <div className="repeat_frequency_inputs">
            <input
              type="numeric"
              value={daysTag}
              onChange={(e) => setDaysTag(e.target.value)}
            />
            <select name="" id="">
              <option value="">Week{daysTag > 1 && "s"}</option>
              <option value="">Month{daysTag > 1 && "s"}</option>
              <option value="">Year{daysTag > 1 && "s"}</option>
            </select>
          </div>
        </div>
        <div className="repeat_days">
          <p className="block_title">Repeat on</p>
          <div className="day_checkbox">
            {weekDays.map((weekday) => (
              <div className="check_day">
                <input
                  key={Math.random()}
                  type="radio"
                  name="days_of_week"
                  id={weekday.day}
                />
                <span>
                  <label htmlFor={weekday.day}>{weekday.icon}</label>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="repeat_end">
          <small className="block_title">Ends</small>
          <div className="never_pick">
            <div className="end_titles">
              <input type="radio" name="repeat_mode" id="end_never" />
              <label htmlFor="end_never">
                <span className="span_class">
                  <small className="small"></small>
                </span>
                <p>Never</p>
              </label>
            </div>
          </div>
          <div className="never_pick">
            <div className="end_titles">
              <input type="radio" name="repeat_mode" id="end_on" />
              <label htmlFor="end_on">
                <span className="span_class">
                  <small className="small"></small>
                </span>
                <p>On</p>
              </label>
            </div>

            <div className="other_details">
              
              <DateInput
                style={{ marginTop: "0" }}
                selected={pickDate}
                onChange={date => setPickDate(date)}
                placeholder="Sept 1, 2021"
              />
            </div>
          </div>
          <div className="never_pick">
            <div className="end_titles">
              <input type="radio" name="repeat_mode" id="end_after" />
              <label htmlFor="end_after">
                <span className="span_class">
                  <small className="small"></small>
                </span>
                <p>After</p>
              </label>
            </div>

            <div className="other_details">
              <input
                value={occurrence}
                onChange={e => setOccurrence(e.target.value)}
                className="after_picker"
                type="number"
                name=""
                id=""
              />
              <p>Occurrence{occurrence > 1 && 's'}</p>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="cancel_button">Cancel</button>
          <button className="done_button">Done</button>
        </div>
      </form>
    </div>
  );
}

export default CustomRecurrence;
