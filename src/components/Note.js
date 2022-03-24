import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ".././index.css";

const Note = ({ id, text, date }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <DeleteIcon className="delete-icon" size="1.3 rem" />
      </div>
    </div>
  );
};

export default Note;
