function EventCard({ event }) {
  return (
    <div className="bg-white border border-gray-300 rounded-md p-4 mb-4 shadow hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800">{event.title}</h2>
      <p className="text-gray-600">開催日: {event.date}</p>
      <p className="text-gray-600">場所: {event.location}</p>
    </div>
  );
}

export default EventCard;
