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

  const addNote = (text) => {
    console.log(text);
  };
  return (
    <div className="container">
      <NoteList notes={notes} addNote={addNote} />
    </div>
  );
};

export default App;
