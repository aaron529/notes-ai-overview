import { matchedData } from "express-validator";
import {
  getNotes,
  getNoteById,
  createNote,
  updateNoteById,
  deleteNoteById,
} from "../services/noteService.js";
import mongoose from "mongoose";

export const createNewNote = async (req, res) => {
  try {
    const data = matchedData(req);
    const note = await createNote(data);
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllNotes = async (req, res) => {
  try {
    const note = await getNotes();
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getNote = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || !mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ message: "Invalid note id" });
    const note = await getNoteById(id);
    res.status(200).json(note);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || !mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ message: "Invalid note id" });
    const data = matchedData(req);
    const note = await updateNoteById(id, data);
    if (note == null) return res.sendStatus(404);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || !mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ message: "Invalid note id" });
    await deleteNoteById(id);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
