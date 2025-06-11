import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // ← 戻るために useNavigate を使用

function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); // ← 遷移に使用
  const [isParticipating, setIsParticipating] = useState(false); // ← 参加状態

  const dummyEvents = [
    {
      id: 1,
      title: "夏祭り",
      date: "2025-07-20",
      location: "公民館",
      description: "地域のお祭りです！屋台や盆踊りがあります。",
    },
    {
      id: 2,
      title: "フリーマーケット",
      date: "2025-08-10",
      location: "中央公園",
      description: "出店者募集中！古着や手作り雑貨も。",
    },
  ];

  const event = dummyEvents.find((e) => e.id === parseInt(id));
  if (!event) return <p>イベントが見つかりませんでした。</p>;

  const handleParticipation = () => {
    setIsParticipating((prev) => !prev);
  };

  return (
    <div className="p-4">
      <button
        onClick={() => navigate(-1)} // ← 前のページに戻る
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
