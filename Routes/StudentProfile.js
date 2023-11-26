import express from "express";
const router = express.Router();

import { addProfile, getProfile } from "../Controller/StudentProfile.js";

router.post("/createProfile", addProfile);
router.get("/getcreateProfile", getProfile);

export default router;