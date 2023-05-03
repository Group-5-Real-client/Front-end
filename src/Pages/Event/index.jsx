import React from "react";
import box from "./box.jpg";
import './index.css';
function EventsPage() {
  return (
    <>
      <div className="events-image">
        <img src={box} alt="2023 Events Calendar" />
        <div className="events-image-overlay">
          <h2>2023 Events Calendar</h2>
          <p>Join us at different events in New Jersey! This year we will have a refill table so you can bring your own containers and refill them with home and body products.</p>
        </div>
      </div>
      <div className="locations-times">
        <h2>Locations & Times</h2>
        <p>2023 Updated Calendar of Events coming soon!</p>
      </div>
    </>
  );
}

export default EventsPage;
