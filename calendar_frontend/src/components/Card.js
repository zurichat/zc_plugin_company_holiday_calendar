import React, { useState } from "react";
import EventCard from "./EventCard/EventCard";
import "./Card.css";

const Card = () => {
  const randomEventData = [
    {
      day: "Wednesday",
      date: "01",
      timings: "All Day",
      description: "Company Break",
      event: false,
      color: "#1A61DB",

    },
    {
      day: "Thursday",
      date: "02",
      timings: "All Day",
      description: "Company Break",
      event: false,
      color: "#1A61DB",
    },
    {
      day: "Friday",
      date: "03",
      timings: "All Day",
      description: "Company Break",
      event: false,
      color: "#1A61DB",
    },
    {
      day: "Friday",
      date: "18",
      timings: "12:00pm - 8:00pm",
      description: "Zuri Picnic",
      event: false,
      color: "#FF9800",

    },
    {
      day: "Sunday",
      date: "31",
      timings: "12:00pm - 8:00pm",
      description: "HNGi8 Hangout",
      event: false,
      color: "#8F3985"
    },
  ];
  const [randomData, setRandomData] = useState(randomEventData);

  const handleClick = (id, e) => {
    setRandomData(
      randomData.map((card) =>
        card.day === id ? { ...card, event: !card.event } : card,
      ),
    );
  };

  const Eventfunction = () => {
    return randomData.map((data, index) => {
      return (
        <div className="card" key={index} style={{
          borderLeftColor: data.color
        }}>
          <div className="card-body" onClick={() => handleClick(data.day)}>
            <div className="d-flex flex-column">
              <div className="d-flex fw-bolder">
                <div className="card-text">{data.day}</div>
                <div className="card-text ms-3">{data.date}</div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fas fa-sun"></i>
              </div>
              <div className="timings" style={{
                color: data.color
              }}>{data.timings}</div>
              <div className="description" style={{
                color: data.color
              }}>{data.description}</div>
            </div>
          </div>
          <div className="pop_up">{data.event ? <EventCard /> : null}</div>
        </div>
      );
    });
  };
  return <div className="container">{Eventfunction()}</div>;
};

export default Card;
