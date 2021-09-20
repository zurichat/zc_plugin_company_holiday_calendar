import React from "react";
import Repeat from "./Repeat";
import DatePicker from "react-datepicker";

const Reminder = () => {
  return (
    <div className="reminder-tab ">
      {/* Reminder form */}

      <form>
        <div className="reminderRow eventTitleRow">
          <div className="remRowGrp">
            <i className="far fa-edit faIcons"></i>
            <input
              name="eventTitle"
              placeholder="Add Title"
              className="eventTitle"
            />
          </div>
        </div>
        <div className="reminderRow inlineGrp">
          <div className="dateInput icon-enabled-date-picker reminderItemInline">
            <i className="far fa-calendar faIcons"></i>

            <DatePicker
            // onChange={onChange}
            // selected={value}
            placeholderText="Date"
            />

            <i className="far fa-angle-down faIcons"></i>
          </div>
          <div className="dateInput icon-enabled-date-picker reminderItemInline">
            <i className="far fa-clock faIcons"></i>

            <DatePicker
              // onChange={onChange}
              // selected={value}
              placeholderText="Time"
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              dateFormat="h:mm aa"
            />

            <i className="far fa-angle-down faIcons"></i>
          </div>
        </div>
      </form>
      <Repeat />
    </div>
  );
};

export default Reminder;
