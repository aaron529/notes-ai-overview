import Note from "../models/noteModel.js";

export const getNotes = async () => {
  return await Note.find();
};

export const getNoteById = async (id) => {
  return await Note.findById(id);
};

export const createNote = async (noteData) => {
  const note = new Note({ ...noteData });
  return await note.save();
};

export const updateNoteById = async (id, noteData) => {
  return await Note.findByIdAndUpdate(id, {
    ...noteData,
    updated_at: Date.now(),
  });
};

export const deleteNoteById = async (id) => {
  return await Note.findByIdAndDelete(id);
};
