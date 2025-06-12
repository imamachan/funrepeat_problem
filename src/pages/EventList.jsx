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
    <div className="max-w-4xl mx-auto p-4 text-base leading-relaxed text-gray-700">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-blue-700">
        イベント一覧
      </h1>

      <div className="mb-6 text-right">
        <Link
          to="events/create"
          className="inline-block bg-blue-500 text-white px-6 py-3 text-sm md:text-base rounded hover:bg-blue-600 transition"
        >
          ＋ イベント作成
        </Link>
      </div>

      {events.length > 0 ? (
        <div className="space-y-4">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">イベントがまだありません。</p>
      )}
    </div>
  );
}

export default EventList;
