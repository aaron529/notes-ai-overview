import { Router } from "express";
import {
  registerUser,
  getAllUsers,
  updateUser,
  deleteUser,
  updateUserPass,
  getUser,
} from "../controllers/authController.js";
import userValidation, {
  currentPasswordValidationRules,
  passwordValidationRules,
  postValidation,
  validateAllRules,
} from "../middleware/authValidation.js";

const router = Router();

router.get("/api/users", getAllUsers);
router.post("/api/users/new", validateAllRules, userValidation, registerUser);
router.get("/api/user/:id", getUser);
router.patch("/api/user/:id/update", postValidation, updateUser);
router.patch(
  "/api/user/:id/updatePassword",
  [...currentPasswordValidationRules, ...passwordValidationRules],
  userValidation,
  updateUserPass
);
router.delete("/api/user/:id/delete", deleteUser);

export default router;
