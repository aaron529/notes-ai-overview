import { Router } from "express";
import notesApi from "./notesApi.js";

const router = Router();

router.use(notesApi);

export default router;
