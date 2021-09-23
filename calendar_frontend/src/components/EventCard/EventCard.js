import React, {useState} from "react";
import "./EventCard.css";
import image from "./Rectangle.png";
import pointer from "./Polygon.png";
import { FaClock } from "react-icons/fa";
import CustomRecurrence from "../customRecurrence";

const EventCard = ({ eventDesc, eventTime }) => {
  const [isButtonClick, setIsButtonClick] = useState(false);
  const [showCustom, setShowCustom] = useState(false)
  return (
    <div className="cards">
      <p className="card_title">{eventDesc}</p>

      <img className="_eventImage" src={image} alt="rect" />
      <div className="schedule">
        <div className="date">
          <p className="schedule_title">Date</p>
          <p>1st Sep - 5th Sep</p>
        </div>

        <div className="date">
          <p className="schedule_title">Time</p>
          <p className="_timeDetails">
            {" "}
            <FaClock color="gray" />{" "}
            <span className="time_desc">{eventTime}</span>{" "}
          </p>
        </div>
      </div>
      <div className="event_desc">
        <h5>Description</h5>
        <p>
          Sapien, mattis tempor mauris nibh facilisi bibendum orci, diam. Est
          rutrum porttitor volutpat vitae donec sit. In neque facilisis tortor
          id pretium feugiat ipsum egestas. Molestie cursus urna eu vel cursus
          et feugiat. Quis elementum, blandit cursus turpis consequat.......
        </p>
      </div>

      <div className="reminder">
        <select className="reminder-dropdown" onClick={() => {setIsButtonClick(!isButtonClick)}}>
          <option selected className="option-one" value="0"  style={{display: `${isButtonClick ? "block" : "none"}`}}>
            Set Reminder
          </option>
          <option>Do not Repeat</option>
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
          <option>Every week day (Monday to Friday)</option>
                <option onClick = {() => {
                    setShowCustom(!showCustom)
                    setIsButtonClick(!isButtonClick)
                }}>Custom...</option>
        </select>
        {showCustom && <CustomRecurrence/>}

      </div>

      <img className="_pointer" src={pointer} alt="" />
    </div>
  );
};

export default EventCard;
