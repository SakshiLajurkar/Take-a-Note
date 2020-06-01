import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from 'prop-types';

function Note(props) {

  function handleClick() {
    props.onDelete(props.id);
  }

  function getContent() {
    props.callback(props);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>

      <button onClick={handleClick}><DeleteIcon /></button>
    </div>
  );
}

Note.protoTypes = {
  callback : PropTypes.func
}

export default Note;
