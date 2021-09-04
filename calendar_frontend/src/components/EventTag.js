import { useState } from "react";
import "./eventTag.css";

const EventTag = () => {
  const [tag, setTag] = useState("Company Holiday");
  return (
    <div className="event-tag">
      <h6>Event Tag</h6>
      <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
    </div>
  );
};

export default EventTag;
