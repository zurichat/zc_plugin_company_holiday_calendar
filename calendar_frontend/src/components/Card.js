import React from 'react'
import './Card.css'
const randomData = [
  {
    day: 'Wednesday',
    date: '01',
    timings: 'All Day',
    description: 'Company Break',
  },
  {
    day: 'Thursday',
    date: '02',
    timings: 'All Day',
    description: 'HNGi8 Hangout',
  },
  {
    day: 'Friday',
    date: '03',
    timings: 'All Day',
    description: 'Company Break',
  },
  {
    day: 'Saturday',
    date: '04',
    timings: '12:00pm - 8:00',
    description: 'Zuri Picnic',
  },
]
const Card = () => {
  const Eventfunction = () => {
    return randomData.map((data, index) => {
      return (
        <div className='card' key={index}>
          <div className='card-body'>
            <div className='d-flex flex-column'>
              <div className='d-flex fw-bolder'>
                <div className='card-text'>{data.day}</div>
                <div className='card-text ms-3'>{data.date}</div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class='fas fa-sun'></i>
              </div>
              <div className='timings'>{data.timings}</div>
              <div className='description'>{data.description}</div>
            </div>
          </div>
        </div>
      )
    })
  }
  return <div className='container'>{Eventfunction()}</div>
}

export default Card
