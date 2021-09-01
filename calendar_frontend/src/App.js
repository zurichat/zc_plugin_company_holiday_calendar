import format from 'date-fns/format'
import getDay from 'date-fns/getDay'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import React from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import './css/react-big-calendar.css'
import Event from './conponents/Event/Event'

const locales = {
  'en-US': require('date-fns/locale/en-US'),
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [
  {
    title: 'Big Meeting',
    allDay: true,
    start: new Date(2021, 6, 0),
    end: new Date(2021, 6, 0),
  },
  {
    title: 'Vacation',
    start: new Date(2021, 6, 7),
    end: new Date(2021, 6, 10),
  },
  {
    title: 'Conference',
    start: new Date(2021, 6, 20),
    end: new Date(2021, 6, 23),
  },
]

function App() {
  return (
    <>
      <Event />
      <div className='App'>
        <div style={{ padding: '30px 47px 0px' }}>
          <h1>Calendar</h1>
          <h2>Add New Event</h2>
        </div>
        <Calendar
          className='calendar'
          localizer={localizer}
          events={events}
          startAccessor='start'
          endAccessor='end'
          style={{ height: 500, margin: '50px' }}
        />
      </div>
    </>
  )
}

export default App

// packages to install before use

// npm i --save react-big-calendar react-datepicker date-fns
