import React, { useContext, useState } from 'react'
import { format } from 'date-fns'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {
  FaRegCalendar,
  FaAngleDown,
  FaRegEdit,
  FaRegClock,
} from 'react-icons/fa'
import { useForm, Controller } from 'react-hook-form'
import { AppContext } from '../../App'
import './Modal.css'
import { HiOutlinePencilAlt, HiOutlineClockCircle } from 'react-icons/hi'
import icon from './clock-icon.png'
import icon2 from './calendar-icon.png'
// import { format } from "date-fns";
import { CirclePicker } from 'react-color'
import chevronDown from './Shape.png'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import Repeat from './Repeat'

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

const Modal = () => {
  const states = useContext(AppContext)
  const { isModalOpen, setIsModalOpen, showEventPage, setShowEventPage } =
    states
  const { control } = useForm()

  const timeStrings = [
    { value: '00:00', label: '12:00 AM' },
    { value: '00:15', label: '12:15 AM' },
    { value: '00:30', label: '12:30 AM' },
    { value: '00:45', label: '12:45 AM' },
    { value: '01:00', label: '01:00 AM' },
    { value: '01:15', label: '01:15 AM' },
    { value: '01:30', label: '01:30 AM' },
    { value: '01:45', label: '01:45 AM' },
    { value: '02:00', label: '02:00 AM' },
    { value: '02:15', label: '02:15 AM' },
    { value: '02:30', label: '02:30 AM' },
    { value: '02:45', label: '02:45 AM' },
    { value: '03:00', label: '03:00 AM' },
    { value: '03:15', label: '03:15 AM' },
    { value: '03:30', label: '03:30 AM' },
    { value: '03:45', label: '03:45 AM' },
    { value: '04:00', label: '04:00 AM' },
    { value: '04:15', label: '04:15 AM' },
    { value: '04:30', label: '04:30 AM' },
    { value: '04:45', label: '04:45 AM' },
    { value: '05:00', label: '05:00 AM' },
    { value: '05:15', label: '05:15 AM' },
    { value: '05:30', label: '05:30 AM' },
    { value: '05:45', label: '05:45 AM' },
    { value: '06:00', label: '06:00 AM' },
    { value: '06:15', label: '06:15 AM' },
    { value: '06:30', label: '06:30 AM' },
    { value: '06:45', label: '06:45 AM' },
    { value: '07:00', label: '07:00 AM' },
    { value: '07:15', label: '07:15 AM' },
    { value: '07:30', label: '07:30 AM' },
    { value: '07:45', label: '07:45 AM' },
    { value: '08:00', label: '08:00 AM' },
    { value: '08:15', label: '08:15 AM' },
    { value: '08:30', label: '08:30 AM' },
    { value: '08:45', label: '08:45 AM' },
    { value: '09:00', label: '09:00 AM' },
    { value: '09:15', label: '09:15 AM' },
    { value: '09:30', label: '09:30 AM' },
    { value: '09:45', label: '09:45 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '10:15', label: '10:15 AM' },
    { value: '10:30', label: '10:30 AM' },
    { value: '10:45', label: '10:45 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '11:15', label: '11:15 AM' },
    { value: '11:30', label: '11:30 AM' },
    { value: '11:45', label: '11:45 AM' },
    { value: '12:00', label: '12:00 PM' },
    { value: '12:15', label: '12:15 PM' },
    { value: '12:30', label: '12:30 PM' },
    { value: '12:45', label: '12:45 PM' },
    { value: '13:00', label: '01:00 PM' },
    { value: '13:15', label: '01:15 PM' },
    { value: '13:30', label: '01:30 PM' },
    { value: '13:45', label: '01:45 PM' },
    { value: '14:00', label: '02:00 PM' },
    { value: '14:15', label: '02:15 PM' },
    { value: '14:30', label: '02:30 PM' },
    { value: '14:45', label: '02:45 PM' },
    { value: '15:00', label: '03:00 PM' },
    { value: '15:15', label: '03:15 PM' },
    { value: '15:30', label: '03:30 PM' },
    { value: '15:45', label: '03:45 PM' },
    { value: '16:00', label: '04:00 PM' },
    { value: '16:15', label: '04:15 PM' },
    { value: '16:30', label: '04:30 PM' },
    { value: '16:45', label: '04:45 PM' },
    { value: '17:00', label: '05:00 PM' },
    { value: '17:15', label: '05:15 PM' },
    { value: '17:30', label: '05:30 PM' },
    { value: '17:45', label: '05:45 PM' },
    { value: '18:00', label: '06:00 PM' },
    { value: '18:15', label: '06:15 PM' },
    { value: '18:30', label: '06:30 PM' },
    { value: '18:45', label: '06:45 PM' },
    { value: '19:00', label: '07:00 PM' },
    { value: '19:15', label: '07:15 PM' },
    { value: '19:30', label: '07:30 PM' },
    { value: '19:45', label: '07:45 PM' },
    { value: '20:00', label: '08:00 PM' },
    { value: '20:15', label: '08:15 PM' },
    { value: '20:30', label: '08:30 PM' },
    { value: '20:45', label: '08:45 PM' },
    { value: '21:00', label: '09:00 PM' },
    { value: '21:15', label: '09:15 PM' },
    { value: '21:30', label: '09:30 PM' },
    { value: '21:45', label: '09:45 PM' },
    { value: '22:00', label: '10:00 PM' },
    { value: '22:15', label: '10:15 PM' },
    { value: '22:30', label: '10:30 PM' },
    { value: '22:45', label: '10:45 PM' },
    { value: '23:00', label: '11:00 PM' },
    { value: '23:15', label: '11:15 PM' },
    { value: '23:30', label: '11:30 PM' },
    { value: '23:45', label: '11:45 PM' },
  ]

  const gmtStrings = [
    { value: '-12GMT', label: '-12 GMT' },
    { value: '-11GMT', label: '-11 GMT' },
    { value: '-10GMT', label: '-10 GMT' },
    { value: '-9GMT', label: '-9 GMT' },
    { value: '-8GMT', label: '-8 GMT' },
    { value: '-7GMT', label: '-7 GMT' },
    { value: '-6GMT', label: '-6 GMT' },
    { value: '-5GMT', label: '-5 GMT' },
    { value: '-4GMT', label: '-4 GMT' },
    { value: '-3GMT', label: '-3 GMT' },
    { value: '-2GMT', label: '-2 GMT' },
    { value: '-1GMT', label: '-1 GMT' },
    { value: '+0GMT', label: '+0 GMT' },
    { value: '+1GMT', label: '+1 GMT' },
    { value: '+2GMT', label: '+2 GMT' },
    { value: '+3GMT', label: '+3 GMT' },
    { value: '+4GMT', label: '+4 GMT' },
    { value: '+5GMT', label: '+5 GMT' },
    { value: '+6GMT', label: '+6 GMT' },
    { value: '+7GMT', label: '+7 GMT' },
    { value: '+8GMT', label: '+8 GMT' },
    { value: '+9GMT', label: '+9 GMT' },
    { value: '+10GMT', label: '+10 GMT' },
    { value: '+11GMT', label: '+11 GMT' },
    { value: '+12GMT', label: '+12 GMT' },
  ]

  const colors = [
    '#2573F6',
    '#8CB7FF',
    '#8F3985',
    '#C2185B',
    '#FF9800',
    '#FFEB3B',
    '#00B87C',
    '#D0E888',
    '#454545',
    '#999999',
  ]
  const [color, setColor] = useState('#00B87C')
  const [isColorBoxOpen, setIsColorBoxOpen] = useState(false)
  const [eventTag, setEventTag] = useState('')
  const [eventTitle, setEventTitle] = useState('Weekend Get Away')

  const handleNewEventSubmit = (evt) => {
    evt.preventDefault()
    setOpenSnackbar(true)
    // Check input fields
    const update = {
      _id: new Date().getTime().toString(),
      event_title: eventTitle,
      start_date: '2021-09-25',
      end_date: '2021-09-22',
      start_time: '18:24:00',
      end_time: '23:04:00',
      time_zone: 'Antarctica/DumontDUrville',
      description: 'zuri holiday',
      all_day: false,
      event_tag: eventTag,
      event_colour: color,
    }
    console.log(update)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(update),
    }
    fetch(
      'https://sheltered-ocean-11512.herokuapp.com/https://calendar.zuri.chat/api/v1/create-event/',
      options
    )
      .then((data) => {
        if (!data.ok) {
          throw Error(data.status)
        }
        return data
      })
      .then((update) => {
        console.log(update)
      })
      .catch((e) => {
        console.log(e)
      })
    // clear inputs
    setEventTag('')
    setColor('00B87C')
    setEventTitle('Weekend Get Away')
  }

  const [openSnackbar, setOpenSnackbar] = useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenSnackbar(false)
  }

  return (
    <>
      {isModalOpen && (
        <div className='modal'>
          <header>
            <h4>Add New Event</h4>
            <i
              className='far fa-times-circle'
              onClick={() => setIsModalOpen(false)}
              aria-hidden='true'
            ></i>
          </header>
          <section>
            <button
              className={`event-btn ${!showEventPage && 'tab-border'} ${
                showEventPage && 'tab-background'
              }`}
              onClick={() => setShowEventPage(true)}
            >
              Event
            </button>
            <button
              className={`reminder-btn ${showEventPage && 'tab-border'} ${
                !showEventPage && 'tab-background'
              }`}
              onClick={() => setShowEventPage(false)}
            >
              Reminder
            </button>
            {showEventPage ? (
              <div className='event-tab'>
                <form onSubmit={handleNewEventSubmit} className='evenForm'>
                  <div className='firstRow'>
                    <div className='evenForm-title'>
                      <FaRegEdit className='event-field-icon' />
                      <input
                        name='title'
                        value={eventTitle}
                        onChange={(e) => setEventTitle(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className='secondRow'>
                    <div className='dateInput icon-enabled-date-picker'>
                      <FaRegCalendar className='event-field-icon' />
                      <Controller
                        control={control}
                        name='startDate'
                        render={({
                          field: { onChange, onBlur, value, ref },
                        }) => (
                          <DatePicker
                            placeholderText='Start Date'
                            dateFormat='MMM d yyyy'
                            onChange={onChange}
                            onBlur={onBlur}
                            selected={value}
                          />
                        )}
                      />
                      <FaAngleDown className='event-field-icon' />
                    </div>
                    <div className='dateInput icon-enabled-date-picker'>
                      <FaRegCalendar className='event-field-icon' />
                      <Controller
                        control={control}
                        name='endDate'
                        render={({
                          field: { onChange, onBlur, value, ref },
                        }) => (
                          <DatePicker
                            placeholderText='End Date'
                            dateFormat='MMM d yyyy'
                            onChange={onChange}
                            onBlur={onBlur}
                            selected={value}
                          />
                        )}
                      />
                      <FaAngleDown className='event-field-icon' />
                    </div>
                  </div>
                  <div className='thirdRow'>
                    <div className='timeInput'>
                      <FaRegClock className='event-field-icon' />
                      <select name='startTime' className='time-select'>
                        <option value=''>Start Time</option>
                        {timeStrings.map((timeString) => (
                          <option value={timeString.value}>
                            {timeString.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='timeInput'>
                      <FaRegClock className='event-field-icon' />
                      <select name='endTime' className='time-select'>
                        <option value=''>End Time</option>
                        {timeStrings.map((timeString) => (
                          <option value={timeString.value}>
                            {timeString.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='gmtInput'>
                      <select name='time' className='time-select'>
                        {gmtStrings.map((gmtString) => (
                          <option value={gmtString.value}>
                            {gmtString.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className='fourthRow'>
                    <div>
                      <input type='checkbox' name='allDay' value='Bike' />
                      <label htmlFor='allDay'> All Day</label>
                      <br />
                    </div>
                  </div>
                  <div className='event__tag'>
                    <p className='event__tag--title'>Event Tag</p>

                    <div className='event__tag--inputs'>
                      <TextField
                        value={eventTag}
                        onChange={(evt) => setEventTag(evt.target.value)}
                        id='standard-basic'
                        label='Company Holiday'
                      />

                      <div
                        className='event__tag--color'
                        onClick={() => setIsColorBoxOpen(!isColorBoxOpen)}
                      >
                        <div
                          style={{
                            backgroundColor: color,
                            width: '2rem',
                            height: '2rem',
                            borderRadius: '100%',
                            cursor: 'pointer',
                          }}
                          className='current__color'
                        ></div>
                        <img src={chevronDown} alt='Down arrow' />
                      </div>
                    </div>

                    {isColorBoxOpen && (
                      <div className='color__box'>
                        <CirclePicker
                          color={color}
                          width={80}
                          colors={colors}
                          circleSize={25}
                          circleSpacing={12}
                          onChangeComplete={(color, event) => {
                            setColor(color.hex)
                            setIsColorBoxOpen(false)
                          }}
                        />
                      </div>
                    )}
                  </div>

                  <div className='eventButtons'>
                    <Button
                      variant='outlined'
                      style={{
                        borderColor: '#00B87C',
                        color: '#00B87C',
                        marginRight: '1rem',
                      }}
                      onClick={() => setIsModalOpen(false)}
                      className='eventButtons__cancel'
                    >
                      Cancel
                    </Button>
                    <Button
                      type='submit'
                      variant='contained'
                      onClick={handleNewEventSubmit}
                      style={{ backgroundColor: '#00B87C', color: '#fff' }}
                      className='eventButtons__create'
                    >
                      Create
                    </Button>
                  </div>

                  <Snackbar
                    open={openSnackbar}
                    autoHideDuration={2000}
                    onClose={handleClose}
                  >
                    <Alert onClose={handleClose} severity='success'>
                      Event Created Successfully
                    </Alert>
                  </Snackbar>
                </form>
              </div>
            ) : (
              <div className='reminder-tab '>
                {/* Reminder form */}

                <form>
                  <div className='reminderRow eventTitleRow'>
                    <div className='remRowGrp'>
                      <i className='far fa-edit faIcons'></i>
                      <input
                        name='eventTitle'
                        placeholder='Add Title'
                        className='eventTitle'
                      />
                    </div>
                  </div>
                  <div className='reminderRow inlineGrp'>
                    <div className='dateInput icon-enabled-date-picker reminderItemInline'>
                      <i className='far fa-calendar faIcons'></i>

                      <Controller
                        control={control}
                        name='reminderDate'
                        render={({
                          field: { onChange, onBlur, value, ref },
                        }) => (
                          <DatePicker
                            placeholderText='Sep 4, 2021'
                            dateFormat='MMM d yyyy'
                            onChange={onChange}
                            onBlur={onBlur}
                            selected={value}
                          />
                        )}
                      />
                      <i className='far fa-angle-down faIcons'></i>
                    </div>
                    <div className='dateInput icon-enabled-date-picker reminderItemInline'>
                      <i className='far fa-clock faIcons'></i>

                      <Controller
                        control={control}
                        name='reminderTime'
                        render={({
                          field: { onChange, onBlur, value, ref },
                        }) => (
                          <DatePicker
                            placeholderText='10:30am'
                            onChange={onChange}
                            onBlur={onBlur}
                            selected={value}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption=''
                            dateFormat='h:mm aa'
                          />
                        )}
                      />
                      <i className='far fa-angle-down faIcons'></i>
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
  )
}

export default Modal
