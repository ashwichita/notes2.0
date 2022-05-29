import "./Note.css";
import { useContext } from "react";
import NotesContext from "../NotesContext";
import Icon from 'react-crud-icons'


const Note = (props) => {
  const { deleteNote } = useContext(NotesContext);
  const data = {id : props.id, text : props.text, title : props.title}

  return (
    <div className="note">
      <div className="note-text"  onClick={() => props.openEditModal(data)}>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
      <Icon 
      name = 'remove'
      size = 'medium'
      theme = 'light'
      className = 'icon'
      onClick={() => deleteNote(props.id)}></Icon>
    </div>
  );
};

export default Note;
