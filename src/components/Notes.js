import "./Notes.css";
import Note from "./Note";
import { useContext, useState } from "react";
import NotesContext from "../NotesContext";
import Modal from "react-modal";
import AddNote from "./AddNote";
import EditNote from './EditNote'
import Icon from "react-crud-icons";

const Notes = () => {
  const { notes } = useContext(NotesContext);

  Modal.setAppElement("#root");
  const [newIsOpen, setNewIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [updateData, setUpdateData] = useState('');

  function openNewModal() {
    setNewIsOpen(true);
  }

  function closeNewModal() {
    setNewIsOpen(false);
  }

  function openEditModal(data) {
    setEditIsOpen(true);
    setUpdateData(data)
  }

  function closeEditModal() {
    setEditIsOpen(false);
  }

  return (
    <div className="notes">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          text={note.text}
          openEditModal={openEditModal}
        />
      ))}
      <Modal
        isOpen={newIsOpen}
        onRequestClose={closeNewModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <AddNote closeNewModal={closeNewModal} />
      </Modal>
      <Modal
        isOpen={editIsOpen}
        onRequestClose={closeEditModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <EditNote updateData={updateData} closeEditModal={closeEditModal}/>
      </Modal>
      <Icon name="add" className="new-button" onClick={openNewModal} />
    </div>
  );
};

export default Notes;
