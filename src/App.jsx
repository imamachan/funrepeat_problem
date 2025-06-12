// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import EventList from "./pages/EventList";
import EventDetail from "./pages/EventDetail";
import EventCreate from "./pages/EventCreate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EventList />} />
      <Route path="/events/:id" element={<EventDetail />} />
      <Route path="/events/create" element={<EventCreate />} />
    </Routes>
  );
}

export default App;
