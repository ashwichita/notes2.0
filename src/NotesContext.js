import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NotesContext = createContext();

const DUMMY_NOTES = [
  {
    id: uuidv4(),
    title: "My Notes App 1.0",
    text: "simple CRUD application for managing notes.",
  },
  {
    id: uuidv4(),
    title: "v1.1",
    text: "added dark mode, modals, completed css.",
  },
  {
    id: uuidv4(),
    title: "v1.2",
    text: "added basic funcionality, add note, edit note half way",
  },
  {
    id: uuidv4(),
    title: "Not complete!",
    text: "coming soon",
  },
];

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState(DUMMY_NOTES);
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  const addNote = (title, text) => {
    setNotes([{ id: uuidv4(), title, text }, ...notes]);
  };

  const editNote = (id, updatedNote) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? updatedNote : note
      )
    );
  };

  return (
    <NotesContext.Provider value={{ notes, deleteNote, addNote, editNote }}>{children}</NotesContext.Provider>
  );
}

export default NotesContext;
