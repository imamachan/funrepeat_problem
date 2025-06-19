// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-blue-600 text-white p-4">
    <h1 className="text-xl font-bold">
      <Link to="/">イベントアプリ</Link>
    </h1>
    <div className="mb-6 text-right">
      <Link
        to="events/create"
        className="inline-block bg-blue-500 text-white px-6 py-3 text-sm md:text-base rounded hover:bg-blue-600 transition"
      >
        ＋ イベント作成
      </Link>
    </div>
  </header>
);

export default Header;
