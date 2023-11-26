import express from "express";
const router = express.Router();

import {addjob,getAllUsers,deletepost,updatepost} from "../Controller/job.js";

router.post("/post",addjob);
router.get("/alljob",getAllUsers);
router.delete("/dltJob",deletepost);
router.put("/updtjob/:id",updatepost);

export default router;