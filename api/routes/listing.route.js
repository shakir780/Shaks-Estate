import express from "express";
import { verifytoken } from "../utils/verifytoken.js";
import { createListing } from "../controllers/listing.controller.js";
const router = express.Router();

router.post("/create", verifytoken, createListing);

export default router;
