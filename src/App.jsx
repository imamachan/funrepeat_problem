// src/App.jsx
import { Routes, Route } from "react-router-dom";
import EventList from "./pages/EventList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EventList />} />
    </Routes>
  );
}

export default App;
