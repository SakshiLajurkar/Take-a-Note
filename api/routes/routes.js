const Note = require("../models/notes-model");
const HttpError = require('../models/http-error');

const createNote = async (req, res, next) => {
  const {
    title,
    content
  } = req.body;
  const newNote = new Note({
    title,
    content
  });
  try {
    await newNote.save();
  } catch (err) {
    const error = new HttpError(
      'Creating note failed, please try again.',
      500
    );
    return next(error);
  }
  res.status(201).json({
    note: newNote.toObject({
      getters: true
    })
  });
};

const getNotes = async (req, res, next) => {
  let notes;
  try {
    notes = await Note.find(foundNotes => {
      return foundNotes
    });
  } catch (err) {
    const error = new HttpError(
      'Could not find notes',
      500
    );
    return next(error);
  }
  if (!notes || notes.length === 0) {
    const error = new HttpError(
      'Note database empty, Could not find notes',
      404
    );
    return next(error);
  }
  res.json({
    notes
  });
}

const deleteNote = async (req, res, next) => {
  const noteId = req.params.nid;
  let note;
  try {
    note = await Note.findByIdAndRemove(noteId);
  } catch (err) {
    const error = new HttpError(
      'Could not delete note from database',
      500
    );
    return next(error);
  }
  res.status(200).json({
    message: 'Deleted note!'
  });
}

module.exports = app => {
  var router = require("express").Router();

  router.post("/", createNote);
  router.get("/", getNotes);
  router.delete("/:nid", deleteNote);

  app.use('/api/notes', router);
};
