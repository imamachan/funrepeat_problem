import React from "react";
import { Link } from "react-router-dom";

function EventCard({ event }) {
  const participation = JSON.parse(localStorage.getItem("participation")) || {};
  const isParticipating = participation[event.id];
  const participantCount = Object.keys(participation).filter(
    (key) => Number(key) === event.id
  ).length;

  return (
    <div className="border p-4 rounded shadow mb-4">
      <h2 className="text-xl font-semibold">{event.title}</h2>
      <p>開催日: {event.date}</p>
      <p>場所: {event.location}</p>
      <p className="text-sm mt-2">参加人数: {participantCount}名</p>

      {isParticipating && (
        <p className="text-green-600 mt-2">✅ 参加表明済み</p>
      )}
      <Link to={`/events/${event.id}`} className="text-blue-500 underline">
        詳細を見る
      </Link>
    </div>
  );
}

export default EventCard;
