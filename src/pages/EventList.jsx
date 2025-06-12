// src/pages/EventList.jsx
import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  return (
    <div>
      <h1>イベント一覧</h1>

      <div className="mb-4">
        <Link
          to="events/create"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          イベント作成
        </Link>
      </div>

      {events.length > 0 ? (
        events.map((event) => <EventCard key={event.id} event={event} />)
      ) : (
        <p>イベントがまだありません。</p>
      )}
    </div>
  );
}

export default EventList;
