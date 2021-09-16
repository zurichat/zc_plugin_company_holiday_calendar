import React, { useContext, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useForm, Controller } from 'react-hook-form'
import { AppContext } from '../../App'
import './Modal.css'
import { HiOutlinePencilAlt, HiOutlineClockCircle } from 'react-icons/hi'
import icon from './Icons/clock-icon.png'
import icon2 from './Icons/calendar-icon.png'
import icon3 from './Icons/active.png'
import { CirclePicker } from 'react-color'
import chevronDown from './Icons/Shape.png'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import EventDescription from './EventDescription/EventDescription'
import axios from 'axios'

import Repeat from './Repeat'

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

const Modal = () => {
  const states = useContext(AppContext)
  const { isModalOpen, setIsModalOpen, showEventPage, setShowEventPage } =
    states

  const [color, setColor] = useState('#00B87C')
  const [isColorBoxOpen, setIsColorBoxOpen] = useState(false)
  const [eventTag, setEventTag] = useState('')
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm()

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

  const handleNewEventSubmit = (data) => {
    // const eventFormData = {
    //   event_title: data.title,
    //   start_date: [
    //     data.startDate.getDate(),
    //     data.startDate.getMonth(),
    //     data.startDate.getFullYear(),
    //     data.startDate.getDay(),
    //   ],
    //   end_date: [
    //     data.endDate.getDate(),
    //     data.endDate.getMonth(),
    //     data.endDate.getFullYear(),
    //     data.endDate.getDay(),
    //   ],
    //   start_time: [data.startTime.getHours(), data.startTime.getMinutes()],
    //   end_time: [data.endTime.getHours(), data.endTime.getMinutes()],
    //   time_zone: data.gmt,
    //   all_day: data.allDay,
    //   event_tag: eventTag,
    //   description: 'zuri holday hng internship',
    //   event_colour: color,
    //   images: null,
    // }
    const eventFormData = {
      event_title: data.title,
      start_date: `${data.startDate.getFullYear()}-${
        data.startDate.getMonth() + 1 > 9
          ? data.startDate.getMonth() + 1
          : `0${data.startDate.getMonth() + 1}`
      }-${data.startDate.getDate()}`,
      end_date: `${data.endDate.getFullYear()}-${
        data.endDate.getMonth() + 1 > 9
          ? data.endDate.getMonth() + 1
          : `0${data.endDate.getMonth() + 1}`
      }-${data.endDate.getDate()}`,
      start_time: `${data.startTime.getHours()}:${data.startTime.getMinutes()}:00`,
      end_time: `${data.endTime.getHours()}:${data.endTime.getMinutes()}:00`,
      time_zone: 'Africa/Ceuta',
      all_day: data.allDay,
      event_tag: eventTag,
      description: 'zuri holday hng internship',
      event_colour: color,
      images: null,
    }

    console.log(eventFormData)

    const post = async () => {
      try {
        const result = await axios({
          method: 'POST',
          url: 'https://calendar.zuri.chat/api/v1/create-event/',
          data: eventFormData,
        })
        console.log(result)
      } catch (error) {
        console.log(error.message)
      }
    }
    post()
    setOpenSnackbar(true)
    // Check input fields
    // clear inputs
    setEventTag('')
    setColor('00B87C')
  }

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
                <form
                  onSubmit={handleSubmit(handleNewEventSubmit)}
                  className='evenForm'
                >
                  <div className='row firstRow'>
                    <div
                      className={`evenForm-title ${
                        errors.title ? 'input-error' : ''
                      }`}
                    >
                      <img
                        className='event-field-icon'
                        src={icon3}
                        alt=''
                      ></img>
                      <input
                        placeholder='Weekend Get Away'
                        {...register('title', {
                          required: 'Enter Event Title',
                        })}
                      />
                    </div>
                  </div>
                  <div className='row secondRow'>
                    <div
                      className={`dateInput icon-enabled-date-picker ${
                        errors.startDate ? 'input-error' : ''
                      }`}
                    >
                      <img
                        className='event-field-icon'
                        src={icon2}
                        alt=''
                      ></img>
                      <Controller
                        control={control}
                        name='startDate'
                        rules={{ required: 'Select a Start Date' }}
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
                      <img
                        className='event-field-icon'
                        src={chevronDown}
                        alt=''
                      ></img>
                    </div>
                    <div
                      className={`dateInput icon-enabled-date-picker ${
                        errors.endDate ? 'input-error' : ''
                      }`}
                    >
                      <img
                        className='event-field-icon'
                        src={icon2}
                        alt=''
                      ></img>
                      <Controller
                        control={control}
                        name='endDate'
                        rules={{ required: 'Select an End Date' }}
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
                      <img
                        className='event-field-icon'
                        src={chevronDown}
                        alt=''
                      ></img>
                    </div>
                  </div>
                  <div className='row thirdRow'>
                    <div
                      className={`timeInput icon-enabled-date-picker ${
                        errors.startTime ? 'input-error' : ''
                      }`}
                    >
                      <img className='event-field-icon' src={icon} alt=''></img>
                      <Controller
                        control={control}
                        name='startTime'
                        rules={{ required: 'Select a Start Time' }}
                        render={({
                          field: { onChange, onBlur, value, ref },
                        }) => (
                          <DatePicker
                            placeholderText='Start Time'
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
                      <img
                        className='event-field-icon'
                        src={chevronDown}
                        alt=''
                      ></img>
                    </div>
                    <div
                      className={`timeInput icon-enabled-date-picker ${
                        errors.endTime ? 'input-error' : ''
                      }`}
                    >
                      <img className='event-field-icon' src={icon} alt=''></img>
                      <Controller
                        control={control}
                        name='endTime'
                        rules={{ required: 'Select an End Time' }}
                        render={({
                          field: { onChange, onBlur, value, ref },
                        }) => (
                          <DatePicker
                            placeholderText='End Time'
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
                      <img
                        className='event-field-icon'
                        src={chevronDown}
                        alt=''
                      ></img>
                    </div>
                    <div
                      className={`gmtInput ${errors.gmt ? 'input-error' : ''}`}
                    >
                      <select
                        className='time-select'
                        {...register('gmt', { required: 'Select GMT' })}
                      >
                        {gmtStrings.map((gmtString, index) => (
                          <option value={gmtString.value} key={index}>
                            {gmtString.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className='row fourthRow'>
                    <div>
                      <input type='checkbox' {...register('allDay')} />
                      <label htmlFor='allDay'> All Day</label>
                      <br />
                    </div>
                  </div>
                  <div className='row fifthRow'>
                    <EventDescription />
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

                  <div className='eventButtons'>
                    <Button
                      variant='outlined'
                      style={{
                        borderColor: '#00B87C',
                        color: '#00B87C',
                        marginRight: '1rem',
                      }}
                      onClick={() => {
                        clearErrors()
                        setIsModalOpen(false)
                      }}
                      className='eventButtons__cancel'
                    >
                      Cancel
                    </Button>
                    <Button
                      type='submit'
                      variant='contained'
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
