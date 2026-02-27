import express from "express";
import {
  login,
  register,
  deleteUser,
  updateUser,
} from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/delete", deleteUser);
router.post("/update", updateUser);

export default router;
