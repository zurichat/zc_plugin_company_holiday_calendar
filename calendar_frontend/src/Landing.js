import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

const Landing = () => {
  return (
    <div className='landing-page'>
      <h1>Landing Page</h1>
      <Link to='/calendar' className='calendar-plugin'>
        Go To Plugin
      </Link>
    </div>
  )
}

export default Landing
