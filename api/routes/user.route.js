import express from "express";
import { deleteUser, updateUser,getUser } from "../controllers/user.controllers.js";
import { verifytoken } from "../utils/verifytoken.js";
const router = express.Router();

router.put("/update/:id", verifytoken, updateUser);
router.delete("/delete/:id", verifytoken, deleteUser);
router.get("/:id",verifytoken,getUser)

export default router;
