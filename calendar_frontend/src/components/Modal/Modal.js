import React, { useContext, useState } from "react";
import { AppContext } from '../../App'
import './Modal.css'
import { HiOutlinePencilAlt, HiOutlineClockCircle } from 'react-icons/hi'
import icon from './clock-icon.png'
import icon2 from './calendar-icon.png'
// import { format } from "date-fns";
import { CirclePicker } from "react-color";
import chevronDown from "./Shape.png";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const Modal = () => {
  const states = useContext(AppContext);
  const { isModalOpen, setIsModalOpen, showEventPage, setShowEventPage } =
    states;
  const colors = [
    "#2573F6",
    "#8CB7FF",
    "#8F3985",
    "#C2185B",
    "#FF9800",
    "#FFEB3B",
    "#00B87C",
    "#D0E888",
    "#454545",
    "#999999",
  ];
  const [color, setColor] = useState("#00B87C");
  const [isColorBoxOpen, setIsColorBoxOpen] = useState(false);
  const [eventTag, setEventTag] = useState("");

  const handleNewEventSubmit = (evt) => {
    evt.preventDefault();
    setOpenSnackbar(true);
    // Check input fields
    console.log({
      Event_Tag: eventTag,
      Event_Color: color,
    });
    // clear inputs
    setEventTag("");
    setColor("00B87C");
  };

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal">
          <header>
            <h4>Add New Event</h4>
            <i
              className="far fa-times-circle"
              onClick={() => setIsModalOpen(false)}
              aria-hidden="true"
            ></i>
          </header>
          <section>
            <button
              className={`event-btn ${!showEventPage && 'tab-border'} ${showEventPage && 'tab-background'
                }`}
              onClick={() => setShowEventPage(true)}
            >
              Event
            </button>
            <button
              className={`reminder-btn ${showEventPage && 'tab-border'} ${!showEventPage && 'tab-background'
                }`}
              onClick={() => setShowEventPage(false)}
            >
              Reminder
            </button>
            {showEventPage ? (
              <div className="event-tab">
                <form onSubmit={handleNewEventSubmit}>
                  <div className="event__tag">
                    <p className="event__tag--title">Event Tag</p>

                    <div className="event__tag--inputs">
                      <TextField
                        value={eventTag}
                        onChange={(evt) => setEventTag(evt.target.value)}
                        id="standard-basic"
                        label="Company Holiday"
                      />

                      <div
                        className="event__tag--color"
                        onClick={() => setIsColorBoxOpen(!isColorBoxOpen)}
                      >
                        <div
                          style={{
                            backgroundColor: color,
                            width: "2rem",
                            height: "2rem",
                            borderRadius: "100%",
                            cursor: "pointer",
                          }}
                          className="current__color"
                        ></div>
                        <img src={chevronDown} alt="Down arrow" />
                      </div>
                    </div>

                    {isColorBoxOpen && (
                      <div className="color__box">
                        <CirclePicker
                          color={color}
                          width={80}
                          colors={colors}
                          circleSize={25}
                          circleSpacing={12}
                          onChangeComplete={(color, event) => {
                            setColor(color.hex);
                            setIsColorBoxOpen(false);
                          }}
                        />
                      </div>
                    )}
                  </div>

                  <div className="eventButtons">
                    <Button
                      variant="outlined"
                      style={{
                        borderColor: "#00B87C",
                        color: "#00B87C",
                        marginRight: "1rem",
                      }}
                      onClick={() => setIsModalOpen(false)}
                      className="eventButtons__cancel"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      onClick={handleNewEventSubmit}
                      style={{ backgroundColor: "#00B87C", color: "#fff" }}
                      className="eventButtons__create"
                    >
                      Create
                    </Button>
                  </div>

                  <Snackbar
                    open={openSnackbar}
                    autoHideDuration={2000}
                    onClose={handleClose}
                  >
                    <Alert onClose={handleClose} severity="success">
                      Event Created Successfully
                    </Alert>
                  </Snackbar>
                </form>
              </div>
            ) : (
              <div className="reminder-tab ">
                <form>
                  <div className="reminder-tab__title">
                    <HiOutlinePencilAlt />
                    <input type="text" placeholder="Enter event title"></input>

                  </div>
                  <div className="reminder-tab__timer">
                    <div className="calendar">
                      <img className='calendar-icon' src={icon2}></img>
                      <input type="text" placeholder="Sep 4, 2021"></input>

                    </div>
                    <div className="clock">
                      <img className='clock-icon' src={icon}></img>
                      <input type="text" placeholder="10:30am"></input>

                    </div>

                  </div>

                </form>
              </div>
            )}
          </section>
        </div>
      )}
    </>
  );
};

export default Modal;
