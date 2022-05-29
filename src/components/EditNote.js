import './AddNote.css'
import { useState, useContext } from 'react'
import NotesContext from "../NotesContext";

const AddNote = (props) => {

    const { editNote } = useContext(NotesContext)

    const [title, setTitle] = useState(props.updateData.title)
    const [text, setText] = useState(props.updateData.text)

    const titleHandler = (event) =>{
      setTitle(event.target.value)
    }

    const textHandler = (event) =>{
      setText(event.target.value)
    }

    const submitHandler = (event) =>{
      event.preventDefault()
      props.closeEditModal()
      const updatedData = {title: title, text: text, id: props.updateData.id}
      editNote(props.updateData.id, updatedData)
    }


  return (
    <form className='add-note' onSubmit={submitHandler}>
      <label>Title</label>
      <input onChange={titleHandler} className='title-input' type='text' required value={title}></input>
      <label>Text</label>
      <textarea onChange={textHandler} className='text-input' type='text' required value={text}></textarea>
      <button className='add-button'>+</button>
    </form>
  )
}

export default AddNote
