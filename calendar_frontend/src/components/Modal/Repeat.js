import React, { useState } from 'react'
import './Repeat.css'

const weekDays = [
  {
    day: 'Monday',
    icon: 'M',
  },
  {
    day: 'Tuesday',
    icon: 'T',
  },
  {
    day: 'Wednesday',
    icon: 'W',
  },
  {
    day: 'Thursday',
    icon: 'T',
  },
  {
    day: 'Friday',
    icon: 'F',
  },
  {
    day: 'Saturday',
    icon: 'S',
  },
  {
    day: 'Sunday',
    icon: 'S',
  },
]

const Repeat = () => {
  const [frequent, setFrequent] = useState('Repeat')
  const [ifOption, setIfOption] = useState(false)
  const [showCustom, setShowCustom] = useState(false)

  return (
    <div>
      <div className='select-container'>
        <div className='align'>
          <div className='dropdown'>
            <button
              className='dropbtn'
              onClick={() => {
                setIfOption(!ifOption)
              }}
            >
              <i className=' icons fal fa-sync'></i>
              {frequent}
              <i className='icons fas fa-caret-down'></i>
            </button>
            <div
              className='dropdown-content'
              style={{ display: `${ifOption ? 'block' : 'none'}` }}
            >
              <option
                value='Do not repeat'
                onClick={() => setFrequent('Do not repeat')}
              >
                Do not repeat
              </option>
              <option value='Daily' onClick={() => setFrequent('Daily')}>
                Daily
              </option>
              <option value='Weekly' onClick={() => setFrequent('Weekly')}>
                {' '}
                Weekly on Wednesday
              </option>
              <option value='Monthly' onClick={() => setFrequent('Monthly')}>
                Monthly
              </option>
              <option value='Yearly' onClick={() => setFrequent('Yearly')}>
                Yearly
              </option>
              <option value='' onClick={() => setFrequent('Every week day ')}>
                Every week day
              </option>
              <option
                value='Custom'
                onClick={() => {
                  setFrequent('Custom')
                  setShowCustom(!showCustom)
                  setIfOption(!ifOption)
                }}
              >
                Custom...
              </option>
            </div>
            {showCustom && (
              <div>
                {/* everything related to the custom ocurrence goes here*/}
                <div className=''></div>
                <div className='repeat_days'>
                  <p className='block_title'>Repeat on</p>
                  <div className='day_checkbox'>
                    {weekDays.map((weekday, index) => (
                      <div key={index}>
                        <label className='custom-radio' htmlFor={weekday.day}>
                          {weekday.icon}
                          <input
                            key={Math.random()}
                            type='checkbox'
                            name='days_of_week'
                            id={weekday.day}
                            className='days__input'
                          />
                          <span className='checkmark'></span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='ends-opt'>Ends</div>
                <label htmlFor='radio' className='radio-btn'>
                  <input
                    type='radio'
                    name='radio'
                    id='radio'
                    className='radio__input'
                  />
                  <div className='radio__circle'></div>
                  Never
                </label>

                <br />
                <label htmlFor='radios' className='radio-btn'>
                  <input
                    type='radio'
                    name='radio'
                    id='radios'
                    className='radio__input'
                  />
                  <div className='radio__circle'></div>
                  On
                </label>
                <br />
                <label htmlFor='radioss' className='radio-btn'>
                  <input
                    type='radio'
                    name='radio'
                    id='radioss'
                    className='radio__input'
                  />
                  <div className='radio__circle'></div>
                  After
                </label>

                {/* write your code above */}
              </div>
            )}
          </div>
          <label className='day'>
            <input type='checkbox' className='m-5'></input>
            All day
          </label>
        </div>
        <button className='save'>Save</button>
      </div>
    </div>
  )
}

export default Repeat
