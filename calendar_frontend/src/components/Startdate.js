import TimeComp from './start-and-endtime/start-and-endtime'
import './start-and-endtime/start-and-endtime.css'

function StartDate() {
    return (
      <div className="dipl">
        <TimeComp el1 = "9:00 AM" />
        <TimeComp el1 = "End Time" />
      </div>
    );
  }

  export default StartDate;