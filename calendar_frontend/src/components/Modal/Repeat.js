import React from "react";
import  './Repeat.css'

const options = [
  {
    label: "Do not repeat",
    value: "Do not repeat",
  },
  {
    label: "Daily",
    value: "Daily",
  },
  {
    label: "Weekly on Wednesday",
    value: "Weekly on Wednesday",
  },
  {
    label: "Monthly",
    value: "Monthly",
  },
  {
    label: "Yearly",
    value: "Yearly",
  },
  {
    label: "Every Wednesday (Monday to Friday)",
    value: "Every Wednesday (Monday to Friday)",
  },
  {
    label: "Custom...",
    value: "Custom...",
  },
];

class Repeat extends React.Component {
  render() {
    return (
      <div>
        <div className="select-container">
          <select className="dropbtn">
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>

          <input type="checkbox"></input>
          <label className="day"> All day</label>
          <button className="save">Save</button>
        </div>
      </div>
    );
  }
}

export default Repeat;