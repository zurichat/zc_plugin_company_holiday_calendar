// packages to install before use

// npm i --save react-big-calendar react-datepicker date-fns

import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import './css/react-big-calendar.css';
import './index.css';
import Event from './conponents/Event';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

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
];

function App() {
  return (
    <div className='App'>
      <Event />
      <Calendar
        className='calendar'
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500, margin: '50px' }}
      />
    </div>
  );
}

export default App;
