import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaRegCalendar,
  FaAngleDown,
  FaRegEdit,
  FaRegClock,
} from "react-icons/fa";
import { useForm, Controller } from "react-hook-form";
import { AppContext } from '../../App'
import './Modal.css'
import { HiOutlinePencilAlt, HiOutlineClockCircle } from 'react-icons/hi'
import icon from './Icons/clock-icon.png'
import icon2 from './Icons/calendar-icon.png'
import icon3 from './Icons/active.png'
import { CirclePicker } from "react-color";
import chevronDown from "./Icons/Shape.png";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import EventDescription from "./EventDescription/EventDescription";

import Repeat from "./Repeat";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Modal = () => {
  const states = useContext(AppContext);
  const { isModalOpen, setIsModalOpen, showEventPage, setShowEventPage } = states

  const [color, setColor] = useState("#00B87C");
  const [isColorBoxOpen, setIsColorBoxOpen] = useState(false);
  const [eventTag, setEventTag] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const { register, control, handleSubmit, formState: {errors}, clearErrors } = useForm();

  const timeStrings = [
    {value: "00:00:00", label: "12:00 AM"},
    {value: "00:15:00", label: "12:15 AM"},
    {value: "00:30:00", label: "12:30 AM"},
    {value: "00:45:00", label: "12:45 AM"},
    {value: "01:00:00", label: "01:00 AM"},
    {value: "01:15:00", label: "01:15 AM"},
    {value: "01:30:00", label: "01:30 AM"},
    {value: "01:45:00", label: "01:45 AM"},
    {value: "02:00:00", label: "02:00 AM"},
    {value: "02:15:00", label: "02:15 AM"},
    {value: "02:30:00", label: "02:30 AM"},
    {value: "02:45:00", label: "02:45 AM"},
    {value: "03:00:00", label: "03:00 AM"},
    {value: "03:15:00", label: "03:15 AM"},
    {value: "03:30:00", label: "03:30 AM"},
    {value: "03:45:00", label: "03:45 AM"},
    {value: "04:00:00", label: "04:00 AM"},
    {value: "04:15:00", label: "04:15 AM"},
    {value: "04:30:00", label: "04:30 AM"},
    {value: "04:45:00", label: "04:45 AM"},
    {value: "05:00:00", label: "05:00 AM"},
    {value: "05:15:00", label: "05:15 AM"},
    {value: "05:30:00", label: "05:30 AM"},
    {value: "05:45:00", label: "05:45 AM"},
    {value: "06:00:00", label: "06:00 AM"},
    {value: "06:15:00", label: "06:15 AM"},
    {value: "06:30:00", label: "06:30 AM"},
    {value: "06:45:00", label: "06:45 AM"},
    {value: "07:00:00", label: "07:00 AM"},
    {value: "07:15:00", label: "07:15 AM"},
    {value: "07:30:00", label: "07:30 AM"},
    {value: "07:45:00", label: "07:45 AM"},
    {value: "08:00:00", label: "08:00 AM"},
    {value: "08:15:00", label: "08:15 AM"},
    {value: "08:30:00", label: "08:30 AM"},
    {value: "08:45:00", label: "08:45 AM"},
    {value: "09:00:00", label: "09:00 AM"},
    {value: "09:15:00", label: "09:15 AM"},
    {value: "09:30:00", label: "09:30 AM"},
    {value: "09:45:00", label: "09:45 AM"},
    {value: "10:00:00", label: "10:00 AM"},
    {value: "10:15:00", label: "10:15 AM"},
    {value: "10:30:00", label: "10:30 AM"},
    {value: "10:45:00", label: "10:45 AM"},
    {value: "11:00:00", label: "11:00 AM"},
    {value: "11:15:00", label: "11:15 AM"},
    {value: "11:30:00", label: "11:30 AM"},
    {value: "11:45:00", label: "11:45 AM"},
    {value: "12:00:00", label: "12:00 PM"},
    {value: "12:15:00", label: "12:15 PM"},
    {value: "12:30:00", label: "12:30 PM"},
    {value: "12:45:00", label: "12:45 PM"},
    {value: "13:00:00", label: "01:00 PM"},
    {value: "13:15:00", label: "01:15 PM"},
    {value: "13:30:00", label: "01:30 PM"},
    {value: "13:45:00", label: "01:45 PM"},
    {value: "14:00:00", label: "02:00 PM"},
    {value: "14:15:00", label: "02:15 PM"},
    {value: "14:30:00", label: "02:30 PM"},
    {value: "14:45:00", label: "02:45 PM"},
    {value: "15:00:00", label: "03:00 PM"},
    {value: "15:15:00", label: "03:15 PM"},
    {value: "15:30:00", label: "03:30 PM"},
    {value: "15:45:00", label: "03:45 PM"},
    {value: "16:00:00", label: "04:00 PM"},
    {value: "16:15:00", label: "04:15 PM"},
    {value: "16:30:00", label: "04:30 PM"},
    {value: "16:45:00", label: "04:45 PM"},
    {value: "17:00:00", label: "05:00 PM"},
    {value: "17:15:00", label: "05:15 PM"},
    {value: "17:30:00", label: "05:30 PM"},
    {value: "17:45:00", label: "05:45 PM"},
    {value: "18:00:00", label: "06:00 PM"},
    {value: "18:15:00", label: "06:15 PM"},
    {value: "18:30:00", label: "06:30 PM"},
    {value: "18:45:00", label: "06:45 PM"},
    {value: "19:00:00", label: "07:00 PM"},
    {value: "19:15:00", label: "07:15 PM"},
    {value: "19:30:00", label: "07:30 PM"},
    {value: "19:45:00", label: "07:45 PM"},
    {value: "20:00:00", label: "08:00 PM"},
    {value: "20:15:00", label: "08:15 PM"},
    {value: "20:30:00", label: "08:30 PM"},
    {value: "20:45:00", label: "08:45 PM"},
    {value: "21:00:00", label: "09:00 PM"},
    {value: "21:15:00", label: "09:15 PM"},
    {value: "21:30:00", label: "09:30 PM"},
    {value: "21:45:00", label: "09:45 PM"},
    {value: "22:00:00", label: "10:00 PM"},
    {value: "22:15:00", label: "10:15 PM"},
    {value: "22:30:00", label: "10:30 PM"},
    {value: "22:45:00", label: "10:45 PM"},
    {value: "23:00:00", label: "11:00 PM"},
    {value: "23:15:00", label: "11:15 PM"},
    {value: "23:30:00", label: "11:30 PM"},
    {value: "23:45:00", label: "11:45 PM"},
  ]  
    
  const gmtStrings = [
    { value: "-12GMT", label: "-12 GMT" },
    { value: "-11GMT", label: "-11 GMT" },
    { value: "-10GMT", label: "-10 GMT" },
    { value: "-9GMT", label: "-9 GMT" },
    { value: "-8GMT", label: "-8 GMT" },
    { value: "-7GMT", label: "-7 GMT" },
    { value: "-6GMT", label: "-6 GMT" },
    { value: "-5GMT", label: "-5 GMT" },
    { value: "-4GMT", label: "-4 GMT" },
    { value: "-3GMT", label: "-3 GMT" },
    { value: "-2GMT", label: "-2 GMT" },
    { value: "-1GMT", label: "-1 GMT" },
    { value: "+0GMT", label: "+0 GMT" },
    { value: "+1GMT", label: "+1 GMT" },
    { value: "+2GMT", label: "+2 GMT" },
    { value: "+3GMT", label: "+3 GMT" },
    { value: "+4GMT", label: "+4 GMT" },
    { value: "+5GMT", label: "+5 GMT" },
    { value: "+6GMT", label: "+6 GMT" },
    { value: "+7GMT", label: "+7 GMT" },
    { value: "+8GMT", label: "+8 GMT" },
    { value: "+9GMT", label: "+9 GMT" },
    { value: "+10GMT", label: "+10 GMT" },
    { value: "+11GMT", label: "+11 GMT" },
    { value: "+12GMT", label: "+12 GMT" },
  ];

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
  

  const handleNewEventSubmit = (data) => {
    const eventFormData = {
      ...data,
      Event_Tag: eventTag,
      Event_Color: color,
    }
    
    
    console.log(eventFormData);

    setOpenSnackbar(true);
    // Check input fields
    // clear inputs
    setEventTag("");
    setColor("00B87C");
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
                <form onSubmit={handleSubmit(handleNewEventSubmit)} className='evenForm'>
                  <div className="row firstRow">
                    <div className={`evenForm-title ${errors.title? 'input-error': ""}`}>
                      <img className="event-field-icon" src={icon3} alt=""></img>
                      <input
                        placeholder='Weekend Get Away'
                        {...register("title", {required: "Enter Event Title"})}
                      />
                    </div>
                  </div>
                  <div className="row secondRow">
                    <div className={`dateInput icon-enabled-date-picker ${errors.startDate? 'input-error': ""}`}>
                        <img className="event-field-icon" src={icon2} alt=""></img>
                        <Controller
                          control={control}
                          name="startDate"
                          rules={{required: "Select a Start Date"}}
                          render={({field: {onChange, onBlur, value, ref}}) =>(
                            <DatePicker 
                              placeholderText="Start Date"
                              dateFormat="MMM d yyyy"
                              onChange={onChange}
                              onBlur={onBlur}
                              selected={value}
                            />
                          )}
                          
                        />
                        <FaAngleDown className="event-field-icon"/>
                    </div>
                    <div className={`dateInput icon-enabled-date-picker ${errors.endDate? 'input-error': ""}`}>
                        <img className="event-field-icon" src={icon2} alt=""></img>
                        <Controller
                          control={control}
                          name="endDate"
                          rules={{required: "Select an End Date"}}
                          render={({field: {onChange, onBlur, value, ref}}) =>(
                            <DatePicker 
                                placeholderText="End Date"
                                dateFormat="MMM d yyyy"
                                onChange={onChange}
                                onBlur={onBlur}
                                selected={value}
                            />
                          )}
                        />
                        <FaAngleDown className="event-field-icon"/>
                    </div>
                  </div>
                  <div className="row thirdRow">
                    <div className={`timeInput ${errors.startTime? 'input-error': ""}`}>
                        <img className="event-field-icon" src={icon} alt=""></img>
                        <select  
                          className="time-select"
                          {...register("startTime", {required: "Select a Start Time"})}
                        >
                          <option value="">Start Time</option>
                          {
                            timeStrings.map((timeString)=>(
                              <option value={timeString.value}>{timeString.label}</option>
                              ))
                            }
                        </select>
                    </div>
                    <div className={`timeInput ${errors.endTime? 'input-error': ""}`}>
                        <img className="event-field-icon" src={icon} alt=""></img>
                        <select 
                          className="time-select"
                          {...register("endTime", {required: "Select an End Time"})}
                        >
                          <option value="">End Time</option>
                          {
                            timeStrings.map((timeString)=>(
                              <option value={timeString.value}>{timeString.label}</option>
                              ))
                            }
                        </select>
                    </div>
                    <div className={`gmtInput ${errors.gmt? 'input-error': ""}`}>
                      <select
                        className="time-select"
                        {...register("gmt", {required: "Select GMT"})}
                      >
                          {
                            gmtStrings.map((gmtString)=>(
                              <option value={gmtString.value}>{gmtString.label}</option>
                              ))
                            }
                        </select>
                    </div>
                  </div>
                  <div className="row fourthRow">
                    <div>
                      <input
                        type="checkbox"
                        {...register("allDay")}
                      />
                      <label htmlFor="allDay"> All Day</label><br/>
                    </div>
                  </div>
                  <div className="row fifthRow">
                    <EventDescription />
                  </div>
                  
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
                      onClick={() =>{
                        clearErrors()
                        setIsModalOpen(false)
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
              <div className="reminder-tab ">
                {/* Reminder form */}

                <form>
                  <div className="reminderRow eventTitleRow">
                    <div className="remRowGrp">
                      <i className="far fa-edit faIcons"></i>
                      <input
                        name="eventTitle"
                        placeholder="Add Title"
                        className="eventTitle"
                      />
                    </div>
                  </div>
                  <div className="reminderRow inlineGrp">
                    <div className="dateInput icon-enabled-date-picker reminderItemInline">
                      <i className="far fa-calendar faIcons"></i>

                      <Controller
                        control={control}
                        name="reminderDate"
                        render={({
                          field: { onChange, onBlur, value, ref },
                        }) => (
                          <DatePicker
                            placeholderText="Sep 4, 2021"
                            dateFormat="MMM d yyyy"
                            onChange={onChange}
                            onBlur={onBlur}
                            selected={value}
                          />
                        )}
                      />
                      <i className="far fa-angle-down faIcons"></i>
                    </div>
                    <div className="dateInput icon-enabled-date-picker reminderItemInline">
                      <i className="far fa-clock faIcons"></i>

                      <Controller
                        control={control}
                        name="reminderTime"
                        render={({
                          field: { onChange, onBlur, value, ref },
                        }) => (
                          <DatePicker
                            placeholderText="10:30am"
                            onChange={onChange}
                            onBlur={onBlur}
                            selected={value}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption=""
                            dateFormat="h:mm aa"
                          />
                        )}
                      />
                      <i className="far fa-angle-down faIcons"></i>
                    </div>

                    {/* <div className='calendar'>
                      
                      <img className='calendar-icon' src={icon2}></img>
                      <input type='text' placeholder='Sep 4, 2021'></input>
                    </div>
                    <div className='clock'>
                      <img className='clock-icon' src={icon}></img>
                      <input type='text' placeholder='10:30am'></input>
                    </div> */}
                  </div>
                </form>
                <Repeat />
              </div>
            )}
          </section>
        </div>
      )}
    </>
  );
};

export default Modal;
