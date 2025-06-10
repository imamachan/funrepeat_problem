import React from "react";
import EventCard from "../components/EventCard";

const dummyEvents = [
  { title: "夏祭り", date: "2025-07-20", location: "中央公園" },
  { title: "フリーマーケット", date: "2025-08-10", location: "市民センター" },
];

const EventList: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">イベント一覧</h1>
      {dummyEvents.map((event, index) => (
        <EventCard
          key={index}
          title={event.title}
          date={event.date}
          location={event.location}
        />
      ))}
    </div>
  );
};

export default EventList;
