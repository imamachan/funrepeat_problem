import React from "react";

type Props = {
  title: string;
  date: string;
  location: string;
};

const EventCard: React.FC<Props> = ({ title, date, location }) => {
  return (
    <div className="border p-4 rounded shadow-sm mb-2">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>📅 {date}</p>
      <p>📍 {location}</p>
    </div>
  );
};

export default EventCard;
