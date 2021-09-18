import React, { useContext } from "react";
import { AppContext } from "../../App";
import "./HolidayList.css";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import EventCard from "../EventPopup/EventCard";
import { set } from "date-fns";

const HolidayList = () => {
  const states = useContext(AppContext);
  const {
    setShowMonth,
    setShowYear,
    holidays,
    days,
    handleOverlay,
    isEventOpen,
    handleEventPopups,
  } = states;

  // const []

  return (
    <div
      className="home-page"
      onClick={() => {
        setShowMonth(false);
        setShowYear(false);
      }}
    >
      {holidays.map((holiday, index) => {
        const {
          _id,
          start_date,
          all_day,
          event_title,
          event_colour,
          start_time,
          end_time,
        } = holiday;
        return (
          <li
            key={_id}
            className="holiday"
            style={{ borderLeft: `8px solid ${event_colour}` }}
            onClick={() => handleEventPopups(index)}
          >
            <div className="date-icons">
              <span className="event-date">
                {days[new Date(start_date).getDay()]}{" "}
                {new Date(start_date).getDate()}
              </span>
              <span className="edit-del">
                <FiEdit2 style={{ marginRight: "5px" }} />
                <RiDeleteBin5Line />
              </span>
            </div>
            <p className="event-time" style={{ color: `${event_colour}` }}>
              {all_day
                ? "All Day"
                : `${
                    +start_time.slice(0, 2) >= 12
                      ? +start_time.slice(0, 2) - 12
                      : +start_time.slice(0, 2)
                  }:${start_time.slice(3, 5).padStart(2, "0")} ${
                    +start_time.slice(0, 2) >= 12 ? "PM" : "AM"
                  }-${
                    +end_time.slice(0, 2) >= 12
                      ? +end_time.slice(0, 2) - 12
                      : +end_time.slice(0, 2)
                  }:${end_time.slice(3, 5).padStart(2, "0")} ${
                    +end_time.slice(0, 2) >= 12 ? "PM" : "AM"
                  }`}
            </p>
            <p className="event-title" style={{ color: `${event_colour}` }}>
              {event_title}
            </p>
            <div className="pop_up">
              {holiday.event ? <EventCard id={_id} /> : null}
            </div>
          </li>
        );
      })}

      {isEventOpen && <div onClick={handleOverlay} className="_overlay"></div>}
    </div>
  );
};

export default HolidayList;
