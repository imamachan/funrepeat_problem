import React from "react";
import { Link } from "react-router-dom";
import { CalendarDays, MapPin, SquareCheck } from "lucide-react";

function EventCard({ event }) {
  const participation = JSON.parse(localStorage.getItem("participation")) || {};
  const isParticipating = participation[event.id];
  const participantCount = Object.keys(participation).filter(
    (key) => Number(key) === event.id
  ).length;

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 space-y-3 hover:shadow-lg transition">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-700">
        {event.title}
      </h2>

      <div className="flex items-center text-gray-700">
        <CalendarDays className="w-5 h-5 mr-2" />
        <span className="text-base sm:text-lg">{event.date}</span>
      </div>

      <div className="flex items-center text-gray-700">
        <MapPin className="w-5 h-5 mr-2" />
        <span className="text-base sm:text-lg">{event.location}</span>
      </div>

      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
        {event.description || "このイベントに関する説明はまだありません。"}
      </p>

      <p className="text-sm sm:text-base text-gray-600">
        参加人数: <span className="font-semibold">{participantCount}名</span>
      </p>

      {isParticipating && (
        <div className="flex items-center text-green-600 text-sm sm:text-base">
          <SquareCheck className="w-5 h-5 mr-1" />
          <span>参加表明済み</span>
        </div>
      )}

      <div className="pt-2">
        <Link
          to={`/events/${event.id}`}
          className="inline-block mt-2 text-blue-600 hover:text-blue-800 underline text-sm sm:text-base"
        >
          ▶ 詳細を見る
        </Link>
      </div>
    </div>
  );
}

export default EventCard;
