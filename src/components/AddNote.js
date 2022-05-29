import './AddNote.css'
import { useState, useContext } from 'react'
import NotesContext from "../NotesContext";

const AddNote = (props) => {

    const { addNote } = useContext(NotesContext)

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const titleHandler = (event) =>{
      setTitle(event.target.value)
    }

    const textHandler = (event) =>{
      setText(event.target.value)
    }

    const submitHandler = (event) =>{
      event.preventDefault()
      props.closeNewModal()
      addNote(title, text)
    }

  return (
    <form className='add-note' onSubmit={submitHandler}>
      <label>Title</label>
      <input onChange={titleHandler} className='title-input' type='text' required></input>
      <label>Text</label>
      <textarea onChange={textHandler} className='text-input' type='text' required></textarea>
      <button className='add-button'>+</button>
    </form>
  )
}

export default AddNote
