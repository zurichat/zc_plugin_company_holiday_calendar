import React, { useState } from "react";
import "./EventCard.css";
import image from "./Rectangle.png";
import Bell from "./Shape.png";

import { FaClock } from "react-icons/fa";
import { useEffect } from "react";
import axios from "axios";
import parse from "html-react-parser";

const EventCard = ({ id }) => {
  const [eventData, setEventData] = useState({
    loading: false,
    data: [],
    error: false,
  });

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
            {description ? parse(`${description}`) : <p>Loading</p>}
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
                  <button className="reminder-dropdown"> Set Reminder</button>
                </span>
              )}
            </div>
          </div>
        </div>
      ) : (
        content
      )}
    </div>
  );
};

export default EventCard;
