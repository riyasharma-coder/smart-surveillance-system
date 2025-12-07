import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/live">Live View</Link>
      <Link to="/events">Events</Link>
      <Link to="/analytics">Analytics</Link>
      <Link to="/admin">Admin Panel</Link>

      <button onClick={toggleTheme} className="theme-btn">
        {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;
