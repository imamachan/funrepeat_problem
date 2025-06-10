import EventCard from "../components/EventCard";

const dummyEvents = [
  { id: 1, title: "夏祭り", date: "2025-07-20", location: "公民館" },
  {
    id: 2,
    title: "フリーマーケット",
    date: "2025-08-10",
    location: "中央公園",
  },
];

function EventList() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">イベント一覧</h1>
      {dummyEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventList;
