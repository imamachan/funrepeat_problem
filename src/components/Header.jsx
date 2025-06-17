// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-blue-600 text-white p-4">
    <h1 className="text-xl font-bold">
      <Link to="/">イベントアプリ</Link>
    </h1>
  </header>
);

export default Header;
