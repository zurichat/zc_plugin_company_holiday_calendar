import React, { useState } from "react";
import "./Navbar.css";
import Reminder from "./Reminder";
import CancelButton from "./CancelButton";
import "./reminder.css";
import ShowMe from "./showMe/ShowMe";
import DateInput from "./DateInput";
import StartDate from "./Startdate";
import EventDescription from "./EventDescription";

import "./CancelBtn.css";
import EventTag from "./EventTag";
import CreateButton from "./CreateButton";

function Navbar() {
  const [isEventOpen, setIsEventOpen] = useState(false);
  const [showEventPage, setShowEventPage] = useState(true);

  return (
    <div>
      <div className="navbar">
        <div className="month">
          <label>
            <i className="fal fa-calendar-alt"></i>
          </label>
          <select className="select" id="month">
            <option value="january">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September" selected>
              September
            </option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <button className="open-btn" onClick={() => setIsEventOpen(true)}>
          Add Event
        </button>
        {isEventOpen && <div className="overlay"></div>}
        {isEventOpen && (
          <div className="event-form">
            <header>
              <h2>Add New Event</h2>
              <i
                class="far fa-times-circle"
                onClick={() => setIsEventOpen(false)}
                aria-hidden="true"
              ></i>
            </header>

            <div className="btn__group">
              <button
                className={`btn ${showEventPage && "active"}`}
                onClick={() => setShowEventPage(true)}
              >
                Event
              </button>
              <button
                className={`btn btn__reminder ${!showEventPage && "active"}`}
                onClick={() => setShowEventPage(false)}
              >
                Reminder
              </button>
            </div>

            {showEventPage ? (
              <>
                <div className="event-form-date">
                  <DateInput
                    className="start-date"
                    placeholder="Start Date"
                    showIcon={true}
                  />
                  <DateInput
                    className="end-date"
                    placeholder="End Date"
                    showIcon={true}
                  />
                </div>
                <StartDate></StartDate>
                <EventDescription />
                
                <EventTag />
                <ShowMe />
                <section className="cancel-create">
                	<button
                		className="event_btn_cancel"
                		onClick={() => setIsEventOpen(false)}>{" "}
                		Cancel
                	</button>
                	<CreateButton / >
                </section>
              </>
            ) : (
              <div>
                <div className="reminder-contents">
                  <i class="fal fa-bell-slash" id="bell-off-active"></i>
                  <p id="no-reminder">No Reminder</p>
                  <p id="remember"> Remember events by creating a reminder</p>
                </div>
                <div className="reminder-button">
                  <CancelButton /> <Reminder />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
