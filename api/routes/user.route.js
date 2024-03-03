import express from "express";
import {
  deleteUser,
  updateUser,
  getUser,
} from "../controllers/user.controllers.js";
import { verifytoken } from "../utils/verifytoken.js";
import { getUserListings } from "../controllers/listing.controller.js";
const router = express.Router();

router.put("/update/:id", verifytoken, updateUser);
router.delete("/delete/:id", verifytoken, deleteUser);
router.get("/:id", verifytoken, getUser);
router.get("/listings/:id", verifytoken, getUserListings);
export default router;
