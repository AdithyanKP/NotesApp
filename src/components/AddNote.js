import React, { useState } from "react";
import "../index.css";
const AddNote = ({ addNote }) => {
  const [newNote, setNewNote] = useState("");

  //for saving the text input
  const handleChange = (value) => {
    setNewNote(value);
    console.log(newNote);
  };
  //when save click
  const handleSaveClick = () => {
    addNote(newNote);
  };
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        value={newNote}
        placeholder="Type new note here"
        onChange={(e) => handleChange(e.target.value)}
      ></textarea>
      <div className="note-footer">
        <small>200 remaining</small>
        <button
          className="
        save"
          onClick={() => handleSaveClick()}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
