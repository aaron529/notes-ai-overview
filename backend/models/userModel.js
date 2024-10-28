import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  displayname: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: false,
    default: Date.now,
  },
});

export default mongoose.model("User", userSchema);
