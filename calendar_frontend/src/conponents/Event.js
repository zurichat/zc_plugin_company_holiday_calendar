import React, { useState } from "react";
import "./event.css";
import { FaTimesCircle } from "react-icons/fa";
import Button from "./Button";

const Event = () => {
  const [isEventOpen, setIsEventOpen] = useState(false);
  return (
    <div>
      <button id="add-event" onClick={() => setIsEventOpen(true)}>
        Add Event
      </button>
      {isEventOpen && <div className="overlay"></div>}
      {isEventOpen && (
        <div className="event-form">
          <header>
            <h2>Add New Event</h2>
            <FaTimesCircle
              className="faTimes"
              onClick={() => setIsEventOpen(false)}
            />
          </header>
          {/* Code for Create and Cancel buttons on Event form */}
          <section className="cancel-create">
            <button id="cancelButton">Cancel</button>
            <button id="createButton">Create</button>
          </section>
          {/* End of Code for Create and Cancel button */}
        </div>
      )}
    </div>
  );
};

export default Event;
