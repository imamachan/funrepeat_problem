import { useParams } from "react-router-dom";

const dummyEvents = [
  {
    id: 1,
    title: "夏祭り",
    date: "2025-07-20",
    location: "公民館",
    description: "屋台や盆踊りなど楽しいイベントです。",
  },
  {
    id: 2,
    title: "フリーマーケット",
    date: "2025-08-10",
    location: "中央公園",
    description: "手作り商品や不用品を持ち寄って交流します。",
  },
];

function EventDetail() {
  const { id } = useParams();
  const event = dummyEvents.find((e) => e.id === Number(id));

  if (!event) return <p>イベントが見つかりません</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{event.title}</h1>
      <p className="text-gray-600 mt-2">開催日: {event.date}</p>
      <p className="text-gray-600">場所: {event.location}</p>
      <p className="mt-4">{event.description}</p>
    </div>
  );
}

export default EventDetail;
