import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
const Note = () => {
  return (
    <div className="note">
      <span>this is our first note</span>
      <div className="note-footer">
        <small>12/3/2022 </small>
        <DeleteIcon className="delete-icon" size="1.3 rem" />
      </div>
    </div>
  );
};

export default Note;
