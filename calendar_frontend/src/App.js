import React, { useState } from 'react'
import './App.css'
import HolidayList from './components/HolidayList/HolidayList'
import Navbar from './components/Navbar/Navbar'
import Overlay from './components/OverLay/Overlay'
import Sidebar from './components/Sidebar/Sidebar'

export const AppContext = React.createContext()

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [showEventPage, setShowEventPage] = useState(true)

  return (
    <div className='App'>
      <AppContext.Provider
        value={{
          isSidebarOpen,
          setIsSidebarOpen,
          showEventPage,
          setShowEventPage,
        }}
      >
        <Overlay />
        <Sidebar />
        <Navbar />
        <HolidayList />
      </AppContext.Provider>
    </div>
  )
}

export default App
