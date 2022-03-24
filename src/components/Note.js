import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import ".././index.css";

const Note = ({ id, text, date, deleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        {/*  <DeleteIcon
          className="delete-icon"
          size="1.3 rem"
          onClick={() => deleteNote(id)}
        /> */}
        <IconButton aria-label="delete" onClick={() => deleteNote(id)}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Note;
