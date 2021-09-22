import React, { useState } from "react";
import "./EventCard.css";
import image from "./Rectangle.png";
import Bell from "./Shape.png";
import DatePicker from "react-datepicker";
import { FaClock } from "react-icons/fa";
import { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import dropDown from "../Modal/Icons/Shape.png";
import calendar from "../Modal/Icons/calendar-icon.png";
import clock from "../Modal/Icons/clock-icon.png"
import sync from "../Modal/Icons/Sync.png";


const EventCard = ({ id }) => {
  const [eventData, setEventData] = useState({
    loading: false,
    data: [],
    error: false,
  });

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [occurrenceVal, setOccurrenceVal] = useState("Do not repeat");
  const [addReminder, setAddReminder] = useState(false);
  const [isButtonClick, setIsButtonClick] = useState(false);
  //Import necessary function from useForm Hooks.
  const { register, handleSubmit, formState: { errors }, clearErrors } = useForm();

  // Form Handler.

  const submitFormHandler = (reminderData) => {
    const reminderFormData = {
      date: `${date.getFullYear()} - ${date.getMonth() > 9 ? date.getMonth() : "0" + date.getMonth()} - 
      ${date.getDate() > 9 ? date.getDate : "0" + date.getDate()}`,

      time: `${time.getHours()}:${time.getMinutes()}:00`,
      // allDay: `${checked.value}`,
      // showMe: `${checked.value}`,
      // visibility: `${checked.value}`,
    }
  }

  let content = null;

  useEffect(() => {
    setEventData({
      loading: true,
      data: [],
      error: false,
    });
    id &&
      axios
        .get(
          `https://calendar.zuri.chat/api/v1/event-detail/${id}?user=613caf3fceee2ab59d44df06`
        )
        .then((response) => response.data)
        .then((data) =>
          setEventData({
            loading: false,
            data: data,
            error: false,
          })
        )
        .catch((err) =>
          setEventData({ loading: false, data: null, error: true })
        );
  }, [id]);

  const {
    start_date,
    end_date,
    all_day,
    description,
    event_title,
    start_time,
    reminders,
  } = eventData.data;

  const myTime = new Date(start_date + ":" + start_time).toLocaleTimeString();

  eventData.loading && (content = <p>Loading....</p>);

  eventData.error && (content = <p> An Error Occured</p>);
  return (
    <div className="cards">
      {eventData.data ? (
        <div>
          <p className="card_title">{event_title}</p>

          <img className="_eventImage" src={image} alt="rect" />
          <div className="schedule">
            <div className="date">
              <p className="schedule_title">Date</p>
              <>
                {eventData.loading
                  ? (content = <p>Loading...</p>)
                  : new Date(start_date).toDateString().slice(4, 10) +
                    "-" +
                    new Date(end_date).toDateString().slice(4, 10)}
              </>
            </div>

            <div className="date">
              <p className="schedule_title">Time</p>
              <div className="_timeDetails">
                {" "}
                <FaClock color="gray" />{" "}
                <div>
                  {" "}
                  {all_day
                    ? "All day"
                    : eventData.loading
                    ? (content = <p>Loading...</p>)
                    : new Date(
                        start_date + ":" + start_time
                      ).toLocaleTimeString()}
                </div>
              </div>
            </div>
          </div>
          <div className="event_desc">
            <h5>Description</h5>
            <p>{description}</p>
          </div>

          <div className="_reminder">
            <div>
              {reminders ? (
                <div className="reminder_details">
                  <img src={Bell} alt="bell" />
                  <span> {new Date(start_date).toDateString()}</span>
                  <span>{myTime}</span>
                </div>
              ) : (
                <span className="reminder">
                  <button className="reminder-dropdown" onClick={() => {setAddReminder(!addReminder)}}> Set Reminder</button>
                </span>
              )}
            </div>
          </div>

          <div className="reminder-form" style={{display: `${addReminder ? "block" : "none"}`}}>
            <form onSubmit={handleSubmit(submitFormHandler)}>
              <div className="set-reminder">
                <div className="set-time-date">
                    <div className="dateInput input">
                      <img className="calendar-icon" src={calendar} alt="calendar-icon"/>

                      <DatePicker
                        onSelect={(dateVal) => setDate(dateVal)}
                        selected={date}/>

                      <img className="dropdown-icon" src={dropDown} alt="dropdown-icon"/>
                    </div>

                    <div className="timeInput input">
                      <img className="clock-icon" src={clock} alt="clock-icon"/>

                      <DatePicker
                        selected={time}
                        onchange={(timeVal) => setTime(timeVal)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"/>

                      <img className="dropdown-icon" src={dropDown} alt="dropdown-icon"/>
                    </div>
                </div>

                <div className="occurrence">
                  <div className="occurrence-dropdown">
                    <img className="sync-icon" src={sync} alt="sync-icon"/>

                    <input type="text" value={occurrenceVal} onClick={() => {setIsButtonClick(!isButtonClick)}}
                           onChange={(e) => setOccurrenceVal(e.target.value)}/>
                    <img className="dropdown-icon" src={dropDown} alt="dropdown-icon"/>
                      <div className="dropdown-contents" style={{display: `${isButtonClick ? "block" : "none"}`}}>
                        <option value="Do not repeat">Do not repeat</option>
                        <option value="Daily">Daily</option>
                        <option value="Weekly on Wednesday">Weekly on Wednesday</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                        <option value="Every week day (Monday to Friday)">Every week day (Monday to Friday)</option>
                        <option>Custom...</option>
                      </div>


                  </div>

                  <div className="checkbox">
                    <div>
                      <input type="checkbox" {...register("allDay")}/>
                      <label htmlFor="allDay">All Day</label>
                    </div>
                  </div>
                </div>

                <div className="radio">
                  <div className="show-me">
                    <div className="show-text">
                      <p>Show me:</p>
                    </div>
                    <div className="show-radio-button">
                      <div className="busy-radio show">
                        <input type="radio" value="Busy" id="Busy"/>
                        <label htmlFor="Busy">Busy</label>
                      </div>
                      <div className="avail-radio show">
                        <input type="radio" value="Available" id="Available"/>
                        <label htmlFor="Available">Available</label>
                      </div>
                    </div>
                  </div>

                  <div className="visible">
                    <div className="visible-text">
                      <p>Visibility:</p>
                    </div>
                    <div className="visible-radio-button">
                      <div className="default-radio visibility">
                        <input type="radio" value="Default" id="Default"/>
                        <label htmlFor="Default">Default</label>
                      </div>
                      <div className="private-radio visibility">
                        <input type="radio" value="Private" id="Private"/>
                        <label htmlFor="Private">Private</label>
                      </div>
                      <div className="public-radio visibility">
                        <input type="radio" value="Public" id="Public"/>
                        <label htmlFor="Public">Public</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="buttons">
                  <button className="button cancel" onClick={() => {clearErrors(); setAddReminder(false)}}>Cancel</button>
                  <button className="button create">Create</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        content
      )}
    </div>
  );
};

export default EventCard;
