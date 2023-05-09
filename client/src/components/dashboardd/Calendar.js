import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import moment from "moment";
import "./calendar.scss";

const socket = io("http://localhost:5000");

export const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    socket.on("new-event", (data) => {
      setEvents((prevEvents) => [...prevEvents, data]);
    });
  }, []);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const monthDays = [];

  for (let i = firstDay.getDay(); i > 0; i--) {
    monthDays.push(null);
  }

  for (let i = 1; i <= lastDay.getDate(); i++) {
    monthDays.push(new Date(date.getFullYear(), date.getMonth(), i));
  }

  for (let i = lastDay.getDay(); i < 6; i++) {
    monthDays.push(null);
  }

  const generateCalendarEvents = (day) => {
    const eventsForDay = events.filter((event) => {
      return moment(event.date).isSame(day, "day");
    });
    return eventsForDay.map((event) => (
      <div key={event.id} className="event">
        <div className="event-time">
          {moment(event.date).format("hh:mm A")}
        </div>
        <div className="event-title">{event.title}</div>
      </div>
    ));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  return (
    <div className="calendar-container">
      <h3>Calendar</h3>
      <div className="calendar-header">
        <div className="calendar-header__title">
          <div className="month-year">{moment(date).format("MMMM YYYY")}</div>
          <div className="toggle-month">
            <div className="toggle-month__prev" onClick={handlePrevMonth}>&#10094;</div>
            <div className="toggle-month__next" onClick={handleNextMonth}>&#10095;</div>
          </div>
        </div>
        <div className="border"></div>
      </div>
      <div className="calendar-body">
        {days.map((day) => (
          <div key={day} className="calendar-body__day-label">
            {day}
          </div>
        ))}
        {monthDays.map((day) =>
          day ? (
            <div key={day} className="calendar-body__day">
              <div className="day__number">{day.getDate()}</div>
              {generateCalendarEvents(day)}
            </div>
          ) : (
            <div key={Math.random()} className="calendar-body__day"></div>
          )
        )}
      </div>

      <div className="events">
        <div className="events__header">
          <h3>Upcoming</h3>
          <a href="view-events">view all</a>
        </div>
        
        <div className="events__meet">
            hedjdjddh
        </div>
      </div>

    </div>
  );
};
