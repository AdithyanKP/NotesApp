import React from "react";
import "../index.css";
const Header = ({ handleDarkMode, darkmode }) => {
  return (
    <div className="header">
      <h1 className="header-text">My-Notes</h1>
      <button
        onClick={() => handleDarkMode((previousMode) => !previousMode)}
        className="save"
      >
        {darkmode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Header;
