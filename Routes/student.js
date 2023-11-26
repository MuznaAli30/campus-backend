import express from "express";
const router = express.Router();

import {updateStudents,get_single_data} from "../Controller/student.js";

 
router.put("/updtStd/:id",updateStudents);
router.get("/singleStd/:id",get_single_data);

export default router;