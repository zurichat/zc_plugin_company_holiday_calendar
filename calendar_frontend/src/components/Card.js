import React, { useState } from "react";
import EventCard from "./EventCard/EventCard";
import "./Card.css";



const Card = () => {
  const [randomData, setRandomData] = useState([
    {
      day: "Wednesday",
      date: "01",
      timings: "All Day",
      description: "Company Break",
      event: false,
    },
    {

      day: "Thursday",
      date: "01",
      timings: "All Day",
      description: "Company Break",
      event: false,
    },
    {
      day: "Monday",
      date: "01",
      timings: "All Day",
      description: "Company Break",
      event: false,
    },
    {
      day: "Friday",
      date: "01",
      timings: "All Day",
      description: "Company Break",
      event: false,
    },
  ]);

  const handleClick = (id, e) => {
    setRandomData(
      randomData.map((card) =>
        card.day === id ? { ...card, event: !card.event } : card
      )
    );
  };

  const Eventfunction = () => {
    return randomData.map((data,index) => {
      return (
        <div className="card" key = {index}>
          <div className="card-body" onClick={() => handleClick(data.day)}>
            <div className="d-flex flex-column">
              <div className="d-flex fw-bolder">
                <div className="card-text">{data.day}</div>
                <div className="card-text ms-3">{data.date}</div>
              </div>
              <div className="timings">{data.timings}</div>
              <div className="description">{data.description}</div>
             

 
const Card=()=>{

    const Eventfunction=()=>{
        return randomData.map((data)=>{
            return <div className="card" >
                <div className="card-body">
                    <div className="d-flex flex-column">
                        <div className="d-flex fw-bolder">
                            <div className="card-text">{data.day}</div>
                            <div className="card-text ms-3">{data.date}</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-sun"></i>
                        </div>
                    <div className="timings">{data.timings}</div>
                <div className="description">{data.description}</div>

            </div>
          </div>
          <div className="pop_up">{data.event ? <EventCard />  : null}</div>
        
        </div>
      );
    });
  };
  return <div className="container">{Eventfunction()}
  
 </div>;
};

export default Card;
