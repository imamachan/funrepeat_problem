import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const eventId = Number(id);

  const events = JSON.parse(localStorage.getItem("events")) || [];
  const event = events.find((e) => e.id === eventId);

  const [isParticipating, setIsParticipating] = useState(false);

  // 初期表示時に参加状態を読み込む
  useEffect(() => {
    const participation =
      JSON.parse(localStorage.getItem("participation")) || {};
    setIsParticipating(!!participation[eventId]);
  }, [eventId]);

  const handleParticipation = () => {
    const participation =
      JSON.parse(localStorage.getItem("participation")) || {};

    if (isParticipating) {
      delete participation[eventId];
    } else {
      participation[eventId] = true;
    }

    localStorage.setItem("participation", JSON.stringify(participation));
    setIsParticipating(!isParticipating);
  };

  if (!event) return <p>イベントが見つかりませんでした。</p>;

  return (
    <div className="p-4">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 underline mb-4"
      >
        ◀ 戻る
      </button>

      <h1 className="text-2xl font-bold mb-2">{event.title}</h1>
      <p className="mb-1">開催日: {event.date}</p>
      <p className="mb-1">場所: {event.location}</p>
      <p className="mt-4 mb-4">{event.description}</p>

      <button
        onClick={handleParticipation}
        className={`px-4 py-2 rounded text-white ${
          isParticipating ? "bg-red-500" : "bg-green-500"
        }`}
      >
        {isParticipating ? "参加を取り消す" : "参加する"}
      </button>

      {isParticipating && (
        <p className="mt-4 text-green-600 font-semibold">参加表明しました！</p>
      )}
    </div>
  );
}

export default EventDetail;
