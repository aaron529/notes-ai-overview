import { Router } from "express";
import {
  createNewNote,
  getAllNotes,
  updateNote,
  deleteNote,
  getNote,
} from "../controllers/notesController.js";
import noteValidation, {
  postValidation,
  validateAllRules,
} from "../middleware/noteValidation.js";

const router = Router();

router.get("/api/notes", getAllNotes);
router.post("/api/notes/new", validateAllRules, noteValidation, createNewNote);
router.get("/api/note/:id", getNote);
router.put(
  "/api/note/:id/update",
  validateAllRules,
  noteValidation,
  updateNote
);
router.patch(
  "/api/note/:id/update",
  postValidation,
  updateNote
);
router.delete("/api/note/:id/delete", deleteNote);

export default router;
