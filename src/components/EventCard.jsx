import React from "react";

function EventCard({ event, time }) {
  return (
    <div className="event-card">
      <h4>{event}</h4>
      <p>{time}</p>
    </div>
  );
}

export default EventCard;
