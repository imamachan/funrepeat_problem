import React from "react";
import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <h2 className="text-xl font-semibold">{event.title}</h2>
      <p>開催日: {event.date}</p>
      <p>場所: {event.location}</p>
      <Link to={`/events/${event.id}`} className="text-blue-500 underline">
        詳細を見る
      </Link>
    </div>
  );
}

export default EventCard;
