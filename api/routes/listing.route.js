import express from "express";
import { verifytoken } from "../utils/verifytoken.js";
import {
  createListing,
  getListings,
  getListing,
} from "../controllers/listing.controller.js";
const router = express.Router();

router.post("/create", verifytoken, createListing);
router.get("/:id", getListing);
router.get("/", getListings);

export default router;
