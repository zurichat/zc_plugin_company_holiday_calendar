import React, { useState, useContext } from "react";
import Repeat from "./Repeat";
import DatePicker from "react-datepicker";
import Select from "react-select";
import axios from "axios";
import { AppContext } from "../../App";

const Reminder = () => {
  const states = useContext(AppContext);

  const { isModalOpen, setIsModalOpen } = states;

  const [reminderForm, setReminderForm] = useState({
    title: "",
    date: "",
    time: "",
    repeat: "",
  });

  const options = [
    { value: "daily", label: "  Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  // const handleChange = (selectedOption) => {
  //   setSelectValue(selectedOption);
  // };
  const [startDate, setStartDate] = useState(new Date());

  const [startTime, setStartTime] = useState(new Date());

  // event_title: data.title,
  // start_date: startDate.toISOString().slice(0, 10),
  // end_date: endDate.toISOString().slice(0, 10),

  // start_time: `${startTime.getHours()}:${startTime.getMinutes()}:00`,
  // end_time: `${endTime.getHours()}:${endTime.getMinutes()}:00`,

  // time_zone: data.gmt,
  // description: description,
  // all_day: data.allDay,
  // event_tag: eventTag,
  // event_colour: color,
  // images: imgLink === "" ? null : imgLink,

  const [reminderDetails, setReminderDetails] = useState({
    event_title: "",
    start_date: "",
    start_time: "",
    Repeat: "",
    all_day: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // const data = {
    //   title: reminderDetails.event_title,
    //   date: reminderDetails.start_date,
    //   time: reminderDetails.start_time,
    //   repeat: reminderDetails.Repeat,
    //   all_day: reminderDetails.all_day,
    // };
    // console.log(data);
    axios({
      method: "POST",
      url: "https://calendar.zuri.chat/api/v1/create-reminder/",

      data: {
        ...reminderDetails,
        title: reminderDetails.event_title,
        date: reminderDetails.start_date,
        time: reminderDetails.start_time,
        repeat: reminderDetails.Repeat,
        all_day: reminderDetails.all_day,
      },
    });

    setIsModalOpen(false);
  };

  return (
    <div className="reminder-tab ">
      {/* Reminder form */}

      <form onSubmit={handleSubmit}>
        <div className="reminderRow eventTitleRow">
          <div className="remRowGrp">
            <i className="far fa-edit faIcons"></i>

            <input
              name="event_title"
              value={reminderDetails.title}
              placeholder="Add Title"
              className="eventTitle"
              onChange={(e) =>
                setReminderDetails({
                  ...reminderDetails,
                  event_title: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="reminderRow inlineGrp">
          <div className="dateInput icon-enabled-date-picker reminderItemInline">
            <i className="far fa-calendar faIcons"></i>

            <DatePicker
              selected={startDate}
              name="start_Date"
              onChange={(date) => {
                setReminderDetails({
                  ...reminderDetails,
                  start_date: date.toISOString().slice(0, 10),
                });
                setStartDate(date);
              }}
              placeholderText="Date"
            />

            <i className="far fa-angle-down faIcons"></i>
          </div>
          <div className="dateInput icon-enabled-date-picker reminderItemInline">
            <i className="far fa-clock faIcons"></i>

            <DatePicker
              selected={startTime}
              name="start_Time"
              placeholderText="Time"
              onChange={(time) => {
                setReminderDetails({
                  ...reminderDetails,
                  start_time: time.toLocaleTimeString(),
                });
                setStartTime(time);
              }}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              dateFormat="h:mm aa"
            />

            <i className="far fa-angle-down faIcons"></i>
          </div>
        </div>

        <Select
          defaultValue={selectedOption}
          onChange={(selectedOption) =>
            setReminderDetails({
              ...reminderDetails,
              Repeat: selectedOption.value,
            })
          }
          options={options}
        />
        <label className="da">
          <input
            name="graduate"
            type="checkbox"
            checked={reminderDetails.all_day}
            name={"all_Day"}
            onChange={(e) =>
              setReminderDetails({
                ...reminderDetails,
                all_day: e.target.checked,
              })
            }
            className="m-5"
          />
          All day
        </label>
        <button className="save">Save</button>
      </form>
    </div>
  );
};

export default Reminder;
