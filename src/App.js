import React from "react";
import "./App.css";
import Notes from "./components/Notes";
import { NotesProvider } from "./NotesContext";

const App = () => {
  return (
    <div className="App">
      <NotesProvider>
        <Notes />
      </NotesProvider>
    </div>
  );
};

export default App;
