import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const blankNote = { title:"", content:"" };
  const [note, setNote] = useState(blankNote);
  const [clickedInput, setClickedInput] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleClick() {
    props.editNote.isEditing === true
      ? setClickedInput(false)
      : setClickedInput(true);
  }


  function submitNote(event) {
    props.onAdd(note);
    setNote(blankNote);
    setClickedInput(false);
    event.preventDefault();
  }



  return (
    <div>
      <form className="create-note">
      {props.editNote.isEditing || clickedInput ? <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder={props.editNote.isEditing ? props.editNote.title : "Title"}
        /> : null }
        <textarea
          name="content"
          onChange={handleChange}
          onClick={handleClick}
          value={ note.content }
          placeholder= { props.editNote.isEditing ? props.editNote.content : "Take a note..." }
          rows={clickedInput || props.editNote.isEditing ? 3 : 1}
        />
        <div className="submitInput">
          <Zoom in={clickedInput || props.editNote.isEditing}>
            <Fab onClick={ clickedInput ? submitNote : null }>
              <AddIcon />
            </Fab>
          </Zoom>
        </div>

      </form>
    </div>
  );
}

export default CreateArea;
