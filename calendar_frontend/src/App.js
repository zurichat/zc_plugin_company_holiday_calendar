import React from 'react'
import './App.css'
import HolidayList from './components/HolidayList/HolidayList'
import Navbar from './components/Navbar/Navbar'
import Overlay from './components/OverLay/Overlay'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <div className='App'>
      <Overlay />
      <Sidebar />
      <Navbar />
      <HolidayList />
    </div>
  )
}

export default App
