import React, { useContext } from 'react'
import { AppContext } from '../../App'
import './Overlay.css'

const Overlay = () => {
  const states = useContext(AppContext)
  const { isModalOpen, setIsModalOpen } = states
  return (
    <>
      {isModalOpen && (
        <div className='overlay' onClick={() => setIsModalOpen(false)}></div>
      )}
    </>
  )
}

export default Overlay
