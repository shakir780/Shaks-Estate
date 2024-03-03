import express from "express";
import { verifytoken } from "../utils/verifytoken.js";
import {
  createListing,
  getListings,
  getListing,
  deleteListing,
  updateListing,
} from "../controllers/listing.controller.js";
const router = express.Router();

router.post("/create", verifytoken, createListing);
router.delete("/delete/:id", verifytoken, deleteListing);
router.put("/update/:id", verifytoken, updateListing);

router.get("/:id", getListing);
router.get("/", getListings);

export default router;
