import { Router } from "express";
import {
  createNewUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getUser,
} from "../controllers/authController.js";
import userValidation, {
  postValidation,
  validateAllRules,
} from "../middleware/authValidation.js";

const router = Router();

router.get("/api/users", getAllUsers);
router.post("/api/users/new", validateAllRules, userValidation, createNewUser);
router.get("/api/user/:id", getUser);
router.patch(
  "/api/user/:id/update",
  postValidation,
  updateUser
);
router.delete("/api/user/:id/delete", deleteUser);

export default router;
