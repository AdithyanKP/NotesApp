import React, { useState } from "react";
import NoteList from "./components/NoteList";
import "./index.css";
import { nanoid } from "nanoid";
const App = () => {
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

  //adding new Note
  const addNote = (text) => {
    const date = new Date();
    console.log(date);
    const newNote = {
      id: nanoid(),
      text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  //deleting note
  const deleteNote = (id) => {
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  };
  return (
    <div className="container">
      <NoteList notes={notes} addNote={addNote} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
