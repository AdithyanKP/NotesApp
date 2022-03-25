import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import { IconButton } from "@mui/material";
import ".././index.css";

const Note = ({ id, text, date, deleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>

        <IconButton aria-label="delete" onClick={() => deleteNote(id)}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Note;
