import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

const NoteList = ({ notes, addNote, deleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          deleteNote={deleteNote}
        />
      ))}
      <AddNote addNote={addNote} />
    </div>
  );
};

export default NoteList;
