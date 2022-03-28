import React, { useState, useEffect } from "react";
import NoteList from "./components/NoteList";
import "./index.css";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";
const App = () => {
  //initial state config
  const [notes, setNotes] = useState([]);
  //search state
  const [searchText, setSearchText] = useState("");

  //dark mode state
  const [darkmode, setDarkMode] = useState(false);

  //retriving data from local storage
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("react-notes-app"));
    console.log(savedData);
    if (savedData) {
      setNotes(savedData);
    }
  }, []);

  //saving local storage
  useEffect(() => {
    localStorage.setItem("react-notes-app", JSON.stringify(notes));
  }, [notes]);

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
    <div className={`${darkmode && "dark-mode"}`}>
      <div className="container">
        <Header handleDarkMode={setDarkMode} darkmode={darkmode} />
        <Search searchHandle={setSearchText} />
        <NoteList
          //search handling
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          addNote={addNote}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
