import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { AppContext } from "../../App";
import "./Modal.css";
import icon from "./Icons/clock-icon.png";
import icon2 from "./Icons/calendar-icon.png";
import icon3 from "./Icons/active.png";
import { CirclePicker } from "react-color";
import chevronDown from "./Icons/Shape.png";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import EventDescription from "./EventDescription/EventDescription";
import { gmtStrings, colors } from "./helpers";
import axios from "axios";
import Reminder from "./Reminder";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Modal = () => {
  const states = useContext(AppContext);

  const { isModalOpen, setIsModalOpen, showEventPage, setShowEventPage } =
    states;

  const [color, setColor] = useState("#00B87C");
  const [isColorBoxOpen, setIsColorBoxOpen] = useState(false);
  const [eventTag, setEventTag] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm();

  const [description, setDescription] = useState("");
  const [imgLink, setImgLink] = useState("");

  const handleFormSubmission = (data) => {
    const eventFormData = {
      event_title: data.title,

      start_date: `${startDate.getFullYear()}-${
        startDate.getMonth() > 9
          ? startDate.getMonth()
          : "0" + startDate.getMonth()
      }-${
        startDate.getDate() > 9
          ? startDate.getDate()
          : "0" + startDate.getDate()
      }`,

      end_date: `${endDate.getFullYear()}-${
        endDate.getMonth() > 9 ? endDate.getMonth() : "0" + endDate.getMonth()
      }-${endDate.getDate() > 9 ? endDate.getDate() : "0" + endDate.getDate()}`,

      start_time: `${startTime.getHours()}:${startTime.getMinutes()}:00`,

      end_time: `${endTime.getHours()}:${endTime.getMinutes()}:00`,

      time_zone: data.gmt,

      description: description,

      all_day: data.allDay,
      event_tag: eventTag,
      event_colour: color,
      images: imgLink === "" ? null : imgLink,
    };

    const greg = async () => {
      try {
        const { data } = await axios({
          method: "POST",
          url: "https://calendar.zuri.chat/api/v1/create-event/",
          data: eventFormData,
        });
        console.log(data);
        setOpenSnackbar(true);
      } catch (error) {
        console.log(error.message);
      }
    };
    greg();
  };

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
              className={`event-btn ${!showEventPage && "tab-border"} ${
                showEventPage && "tab-background"
              }`}
              onClick={() => setShowEventPage(true)}
            >
              Event
            </button>
            <button
              className={`reminder-btn ${showEventPage && "tab-border"} ${
                !showEventPage && "tab-background"
              }`}
              onClick={() => setShowEventPage(false)}
            >
              Reminder
            </button>

            {showEventPage ? (
              <div className="event-tab">
                <form
                  onSubmit={handleSubmit(handleFormSubmission)}
                  className="evenForm"
                >
                  <div className="row firstRow">
                    <div
                      className={`evenForm-title ${
                        errors.title ? "input-error" : ""
                      }`}
                    >
                      <img
                        className="event-field-icon"
                        src={icon3}
                        alt="event-field-icon"
                      />

                      <input
                        placeholder="Weekend Get Away"
                        {...register("title", {
                          required: "Enter Event Title",
                        })}
                      />
                    </div>
                  </div>

                  <div className="row secondRow">
                    <div
                      className={`dateInput icon-enabled-date-picker ${
                        errors.startDate ? "input-error" : ""
                      }`}
                    >
                      <img
                        className="event-field-icon"
                        src={icon2}
                        alt="event-field-icon"
                      />

                      <DatePicker
                        onSelect={(date) => setStartDate(date)}
                        selected={startDate}
                      />

                      <img
                        className="event-field-icon"
                        src={chevronDown}
                        alt="event-field-icon"
                      />
                    </div>

                    <div
                      className={`dateInput icon-enabled-date-picker ${
                        errors.endDate ? "input-error" : ""
                      }`}
                    >
                      <img className="event-field-icon" src={icon2} alt="" />

                      <DatePicker
                        onSelect={(date) => setEndDate(date)}
                        selected={endDate}
                      />

                      <img
                        className="event-field-icon"
                        src={chevronDown}
                        alt="event-field-icon"
                      />
                    </div>
                  </div>

                  <div className="row thirdRow">
                    <div
                      className={`timeInput icon-enabled-date-picker ${
                        errors.startTime ? "input-error" : ""
                      }`}
                    >
                      <img className="event-field-icon" src={icon} alt="" />

                      <DatePicker
                        selected={startTime}
                        onChange={(date) => setStartTime(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                      />

                      <img
                        className="event-field-icon"
                        src={chevronDown}
                        alt=""
                      />
                    </div>
                    <div
                      className={`timeInput icon-enabled-date-picker ${
                        errors.endTime ? "input-error" : ""
                      }`}
                    >
                      <img className="event-field-icon" src={icon} alt=""></img>

                      <DatePicker
                        selected={endTime}
                        onChange={(date) => setEndTime(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                      />

                      <img
                        className="event-field-icon"
                        src={chevronDown}
                        alt="event-field-icon"
                      />
                    </div>

                    <div
                      className={`gmtInput ${errors.gmt ? "input-error" : ""}`}
                    >
                      <select
                        style={{ color: "#616061" }}
                        className="time-select"
                        {...register("gmt", { required: "Select GMT" })}
                      >
                        {gmtStrings.map((gmtString, index) => (
                          <option
                            style={{ color: "#616061" }}
                            value={gmtString.value}
                            key={index}
                          >
                            {gmtString.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="row fourthRow">
                    <div>
                      <input type="checkbox" {...register("allDay")} />
                      <label htmlFor="allDay"> All Day</label>
                      <br />
                    </div>
                  </div>

                  <div className="row fifthRow">
                    <EventDescription
                      description={description}
                      setDescription={setDescription}
                      imgLink={imgLink}
                      setImgLink={setImgLink}
                    />
                  </div>

                  <div className="event__tag">
                    <p className="event__tag--title">Event Tag</p>

                    <div className="event__tag--inputs">
                      <input
                        placeholder="Company Holiday"
                        type="text"
                        name="eventTag"
                        id="eventTag"
                        value={eventTag}
                        onChange={(evt) => setEventTag(evt.target.value)}
                      />

                      <div
                        className="event__tag--color"
                        onClick={() => setIsColorBoxOpen(!isColorBoxOpen)}
                      >
                        <div
                          style={{
                            backgroundColor: color,
                            width: "1.8rem",
                            height: "1.8rem",
                            borderRadius: "100%",
                            cursor: "pointer",
                          }}
                          className="current__color"
                        ></div>
                        <img src={chevronDown} alt="Down arrow" />
                      </div>
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

                  <div className="eventButtons">
                    <Button
                      variant="outlined"
                      style={{
                        borderColor: "#00B87C",
                        color: "#00B87C",
                        marginRight: "1rem",
                      }}
                      onClick={() => {
                        clearErrors();
                        setIsModalOpen(false);
                      }}
                      className="eventButtons__cancel"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
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
              <Reminder />
            )}
          </section>
        </div>
      )}
    </>
  );
};

export default Modal;
