import mongoose from "mongoose";
import { Schema } from "mongoose";

const noteModel = new Schema({
  title: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: false,
  },
  images: {
    type: String,
    required: false,
  },
  is_archived: {
    type: Boolean,
    required: false,
  },
  created_at: {
    type: Date,
    required: false,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export default mongoose.model("Note", noteModel);
