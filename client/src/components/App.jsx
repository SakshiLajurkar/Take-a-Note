import React, { useState, useEffect } from "react";
import Header from "./Header";
import Note from "./Note";
import Create from "./Create";
import NoteDataService from '../services/note-service';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editingNote, setEditingNote] = useState(false);

  function getNoteData(params) {
    const { id, title, content } = params;
    setEditingNote(() => {
      return {
        id,
        title,
        content,
        isEditing: true
      }
    });
  }

  const displayNotes = async () => {
    setIsLoading(true);
    try {
      const response = await NoteDataService.getAll();
      const responseData = await response.data;

      setNotes(responseData.notes);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    displayNotes();
  }, []);

  function addNote(newNote) {
    NoteDataService.create(newNote)
      .then(() => {
        console.log(newNote);
        displayNotes();
      })
      .catch(error => {
        console.log(error);
      });
    };

  function deleteNote(id) {
    NoteDataService.delete(id)
      .then(()=> {
        displayNotes();
      })
      .catch(error => {
        console.log(error);
      })
  };


  return (
      <div>
        <Header />
        <Create onAdd={addNote} editNote={editingNote}/>
        {!isLoading && notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={noteItem._id}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        }) }

      </div>
  );
}

export default App;
