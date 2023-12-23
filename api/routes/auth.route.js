import express from "express";

import { signUp, signin, handleAuth } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signin);
router.post("/google", handleAuth);
router.post("/facebook", handleAuth);

export default router;
