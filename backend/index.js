import express from "express";
import { config } from "./config/config.js";
import { connectDB } from "./config/database.js";
import routes from "./routes/index.js";
import bodyErrors from "./middleware/bodyErrors.js";

const app = express();
app.use(express.json());
app.use(bodyErrors);

connectDB();

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.use(routes);

app.listen(config.app.port, () => {
  console.log(`Server started at port ${config.app.port}`);
});
