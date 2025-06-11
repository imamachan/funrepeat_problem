// src/App.jsx
import { Routes, Route } from "react-router-dom";
import EventList from "./pages/EventList";
import EventDetail from "./pages/EventDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EventList />} />
      <Route path="/events/:id" element={<EventDetail />} />
    </Routes>
  );
}

export default App;
