import React from "react";
import "../index.css";
const Header = ({ handleDarkMode }) => {
  return (
    <div className="header">
      <h1 className="header-text">My-Notes</h1>
      <button
        onClick={() => handleDarkMode((previousMode) => !previousMode)}
        className="save"
      >
        Toggle Button
      </button>
    </div>
  );
};

export default Header;
