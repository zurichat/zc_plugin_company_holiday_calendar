import React from 'react';
import './Card.css'
const randomData=[
    {
        day:"Wednesday",
        date:'01',
        timings:'All Day',
        description:"Company Break"
    },
    {
        day:"Thursday",
        date:'01',
        timings:'All Day',
        description:"Company Break"
    },
    {   
        day:"Monday",
        date:'01',
        timing:'All Day',
        descriptions:"Company Break"
    },
    {
        day:"Friday",
        date:'01',
        timing1:'All Day',
        descriptions1:"Company Break"
    }
]
const Card=()=>{

    const Eventfunction=()=>{
        return randomData.map((data)=>{
            return <div className="card" >
                <div className="card-body">
                    <div className="d-flex flex-column">
                        <div className="d-flex fw-bolder">
                            <div className="card-text">{data.day}</div>
                            <div className="card-text ms-3">{data.date}</div>
                        </div>
                    <div className="timings">{data.timings}</div>
                    <div className="timing">{data.timing}</div>
                    <div className="timing1">{data.timing1}</div>
                <div className="description">{data.description}</div>
                <div className="descriptions">{data.descriptions}</div>
                <div className="descriptions1">{data.descriptions1}</div>
            </div>
           
        </div>
        </div>
    })
    }
    return(
        <div className="container">
           {Eventfunction()}
        </div>
    )
}

export default Card