import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EventCreate() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = { id: Date.now(), title, date, location, description };
    const existing = JSON.parse(localStorage.getItem("events")) || [];
    localStorage.setItem("events", JSON.stringify([...existing, newEvent]));

    alert("イベントを作成しました！");
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md leading-relaxed">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6">
        イベントを作成する
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 text-sm text-gray-700">タイトル</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border rounded px-3 py-2 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">日付</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full border rounded px-3 py-2 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">場所</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="w-full border rounded px-3 py-2 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">説明</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border px-2 py-1 rounded"
            placeholder="イベントの詳細を入力してください"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded text-base sm:text-lg"
        >
          作成する
        </button>
      </form>

      <button
        onClick={() => navigate(-1)}
        className="mt-6 block text-blue-600 hover:text-blue-800 underline text-sm sm:text-base"
      >
        ◀ 戻る
      </button>
    </div>
  );
}

export default EventCreate;
