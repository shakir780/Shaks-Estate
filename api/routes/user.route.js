import express from "express";
import { deleteUser, updateUser } from "../controllers/user.controllers.js";
import { verifytoken } from "../utils/verifytoken.js";
const router = express.Router();

router.put("/update/:id", verifytoken, updateUser);
router.delete("/delete/:id", verifytoken, deleteUser);

export default router;
