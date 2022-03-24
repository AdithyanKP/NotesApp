import React, { useState } from "react";
import "../index.css";
const AddNote = ({ addNote }) => {
  const [newNote, setNewNote] = useState("");

  //for input limit
  const charLimit = 200;

  //for saving the text input
  const handleChange = (value) => {
    //char limit checking
    if (charLimit - value.length >= 0) {
      setNewNote(value);
      console.log(newNote);
    }
  };
  //when save click
  const handleSaveClick = () => {
    if (newNote.trim().length > 0) {
      addNote(newNote);
      setNewNote("");
    }
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
        <small>{charLimit - newNote.length} remaining</small>
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
