/*
GET /api/notes - Returns all notes
GET /api/notes/:id - Retrieve a specific note
POST /api/notes - Creates a note
PUT /api/notes - Update existing note
DELETE /api/notes/:id - Delete a note
*/
import express from "express";
import { config } from "./config/config.js";
import { connectDB } from "./config/database.js";
import routes from "./routes/index.js";

const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.use(routes);

app.listen(config.app.port, () => {
  console.log(`Server started at port ${config.app.port}`);
});
