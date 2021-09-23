import React, { useContext } from 'react'
import { AppContext } from '../../Plugin'
import './Overlay.css'

const Overlay = () => {
  const states = useContext(AppContext)
  const { isModalOpen, setIsModalOpen, setCurrentFormData } = states
  return (
    <>
      {isModalOpen && (
        <div
          className='overlay'
          onClick={() => {
            setIsModalOpen(false)
            setCurrentFormData()
          }}
        ></div>
      )}
    </>
  )
}

export default Overlay
