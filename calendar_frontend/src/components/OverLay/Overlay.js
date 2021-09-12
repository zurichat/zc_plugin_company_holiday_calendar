import React, {useContext} from 'react'
import './Overlay.css'
import {AppContext} from "../../App";

const Overlay = () => {
    const states = useContext(AppContext)
    const { isSidebarOpen, setIsSidebarOpen } = states
    return (
        <>
            { isSidebarOpen && <div className="overlay" onClick={() => setIsSidebarOpen(false)}/>}
        </>
    )

}

export default Overlay;
