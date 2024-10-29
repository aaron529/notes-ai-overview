import { matchedData } from "express-validator";
import {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  getUserPass,
} from "../services/authService.js";
import mongoose from "mongoose";
import { comparePassword } from "../utils/passHash.js";

export const registerUser = async (req, res) => {
  try {
    const data = matchedData(req);
    const User = await createUser(data);
    res.status(201).json(User);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const User = await getUsers();
    res.status(200).json(User);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || !mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ message: "Invalid User id" });
    const user = await getUserById(id);
    delete user.password;
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || !mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ message: "Invalid User id" });
    const data = matchedData(req);
    const User = await updateUserById(id, data);
    if (User == null) return res.sendStatus(404);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateUserPass = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id || !mongoose.Types.ObjectId.isValid(id))
        return res.status(400).json({ message: "Invalid User id" });
      const data = matchedData(req);
      if (comparePassword(getUserPass, ))
      const User = await updateUserById(id, data);
      if (User == null) return res.sendStatus(404);
      res.sendStatus(200);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || !mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ message: "Invalid User id" });
    await deleteUserById(id);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
