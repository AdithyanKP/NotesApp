import { nanoid } from "nanoid";
import React, { useState } from "react";
import Note from "./Note";

const NoteList = () => {
  //initial state config
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "myfirst note",
      date: "3/10/2022",
    },
    {
      id: nanoid(),
      text: "mySecond note",
      date: "3/10/2022",
    },
    {
      id: nanoid(),
      text: "myThird note",
      date: "3/10/2022",
    },
  ]);
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
    </div>
  );
};

export default NoteList;
