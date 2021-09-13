import React, { useState } from 'react';
import HolidayList from './components/HolidayList/HolidayList';
import Navbar from './components/Navbar/Navbar';
import Overlay from './components/Overlay/Overlay';
import Modal from './components/Modal/Modal';
import './App.css';

export const AppContext = React.createContext();

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
function App() {
  let monthIndex = new Date().getMonth();
  const [month, setMonth] = useState(months[monthIndex]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showEventPage, setShowEventPage] = useState(true);
  const [showMonth, setShowMonth] = useState(false);
  return (
    <div className='App'>
      <AppContext.Provider
        value={{
          month,
          setMonth,
          year,
          setYear,
          isModalOpen,
          setIsModalOpen,
          showEventPage,
          setShowEventPage,
          showMonth,
          setShowMonth,
        }}
      >
        <Overlay />
        <Modal />
        <Navbar />
        <HolidayList />
      </AppContext.Provider>
    </div>
  );
}

export default App;
