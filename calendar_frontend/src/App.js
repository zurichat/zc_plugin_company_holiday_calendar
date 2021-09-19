import React, { useState, useEffect } from "react";
import HolidayList from "./components/HolidayList/HolidayList";
import Navbar from "./components/Navbar/Navbar";
import Overlay from "./components/Overlay/Overlay";
import Modal from "./components/Modal/Modal";
import "./App.css";

export const AppContext = React.createContext();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function App() {
  let monthIndex = new Date().getMonth();
  const [month, setMonth] = useState(months[monthIndex]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showEventPage, setShowEventPage] = useState(true);
  const [showMonth, setShowMonth] = useState(false);
  const [showYear, setShowYear] = useState(false);
  const [fetchData, setFetchData] = useState(false);

  //Event Present Data
  const [currentFormData, setCurrentFormData] = useState();
  const [isEventOpen, setIsEventOpen] = useState(false);
  let [holidays, setHolidays] = useState([]);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const url = "https://calendar.zuri.chat/api/v1/event-list/";

  const getHolidays = async () => {
    const response = await fetch(url);
    const holidays = await response.json();
    return holidays.data.slice(11);
  };

  // const sortedActivities = activities.sort((a, b) => b.date - a.date)


  useEffect(() => {
    getHolidays().then((data) => {
      data.map(data=>{
        data.start_date = new Date(data.start_date);
      })
      const sortedActivities = data.sort((a, b) =>a.start_date - b.start_date)
      data.map(data=>{
        data.start_date = data.start_date.toString()
      })
      
      var sortedDays= [];
      sortedActivities.forEach(i => {
        sortedDays.push(i)
      });     
      setHolidays(sortedActivities);
    });
  }, [month, year, fetchData]);

  const handleOverlay = () => {
    setIsEventOpen(false);
    setHolidays(
      holidays.map((card, index) => {
        return { ...card, event: false };
      })
    );
  };

  const handleModal = () => {
    setIsModalOpen(true);
    handleOverlay();
  };

  const handleEventPopups = (id) => {
    setIsEventOpen(true);
    const lastActiveIndex = holidays.findIndex((card) => card.event === true);

    if (lastActiveIndex !== -1) {
      holidays[lastActiveIndex].event = false;
    }

    // if (lastActiveIndex === id) {
    //   holidays[lastActiveIndex].event = !holidays[lastActiveIndex].event;
    // }

    return setHolidays(
      holidays.map((card, index) =>
        index === id ? { ...card, event: !card.event } : card
      )
    );
  };

  return (
    <div className="Zuri_Calendar_Plugin">
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
          showYear,
          setShowYear,
          months,
          currentFormData,
          setCurrentFormData,
          handleModal,
          holidays,
          days,
          handleOverlay,
          setHolidays,
          isEventOpen,
          setIsEventOpen,
          handleEventPopups,
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