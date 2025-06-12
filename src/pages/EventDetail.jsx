import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CalendarDays, MapPin, SquareCheck } from "lucide-react";

function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isParticipating, setIsParticipating] = useState(false);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("events")) || [];
    const found = events.find((e) => e.id === Number(id));
    setEvent(found);

    const participation =
      JSON.parse(localStorage.getItem("participation")) || {};
    setIsParticipating(participation[id] || false);
  }, [id]);

  if (!event)
    return (
      <p className="text-center mt-8 text-gray-600">
        イベントが見つかりませんでした。
      </p>
    );

  const handleParticipation = () => {
    const updated = !isParticipating;
    const participation =
      JSON.parse(localStorage.getItem("participation")) || {};
    participation[id] = updated;
    localStorage.setItem("participation", JSON.stringify(participation));
    setIsParticipating(updated);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md mt-8 leading-relaxed">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 underline mb-4 block text-sm hover:text-blue-800"
      >
        ◀ 戻る
      </button>

      <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4">
        {event.title}
      </h1>

      <div className="flex items-center text-gray-700 mb-2">
        <CalendarDays className="w-5 h-5 mr-2" />
        <span className="text-base sm:text-lg">{event.date}</span>
      </div>

      <div className="flex items-center text-gray-700 mb-4">
        <MapPin className="w-5 h-5 mr-2" />
        <span className="text-base sm:text-lg">{event.location}</span>
      </div>

      <p className="mb-6 text-sm sm:text-base text-gray-600">
        {event.description || "このイベントに関する説明はまだありません。"}
      </p>

      <button
        onClick={handleParticipation}
        className={`w-full py-2 rounded text-white text-base sm:text-lg font-semibold transition ${
          isParticipating
            ? "bg-red-500 hover:bg-red-600"
            : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {isParticipating ? "参加を取り消す" : "参加する"}
      </button>

      {isParticipating && (
        <div className="mt-4 flex items-center text-green-600 text-sm sm:text-base">
          <SquareCheck className="w-5 h-5 mr-1" />
          <span>参加表明しました！</span>
        </div>
      )}
    </div>
  );
}

export default EventDetail;
