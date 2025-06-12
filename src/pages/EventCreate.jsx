// src/pages/CreateEvent.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EventCreate() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = { id: Date.now(), title, date, location };
    const existing = JSON.parse(localStorage.getItem("events")) || [];
    localStorage.setItem("events", JSON.stringify([...existing, newEvent]));

    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">イベントを作成する</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">タイトル</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border px-2 py-1 rounded"
          />
        </div>
        <div>
          <label className="block">日付</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full border px-2 py-1 rounded"
          />
        </div>
        <div>
          <label className="block">場所</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="w-full border px-2 py-1 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          作成
        </button>
      </form>

      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 underline mb-4"
      >
        ◀ 戻る
      </button>
    </div>
  );
}

export default EventCreate;
