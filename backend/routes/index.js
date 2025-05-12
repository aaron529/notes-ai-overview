import { Router } from "express";
import notesApi from "./notesApi.js";
import authApi from "./authApi.js";

const router = Router();

router.use(notesApi);
router.use(authApi);

export default router;
