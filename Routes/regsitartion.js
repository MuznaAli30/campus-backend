import express from "express";
const router = express.Router();

import { signup, signin, getCompany, getStudents, deleteStudents,deleteCompany, updateStudents, updateCompany, ChangePassword, passwordChangeCompany} from "../Controller/registration.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/changePassword", ChangePassword);
router.post("/CompanyPassword", passwordChangeCompany);
router.get("/allStudents", getStudents);
router.get("/allCompany", getCompany);
router.delete("/dltStudents/:id", deleteStudents);
router.delete("/dltCompany/:id", deleteCompany);
router.put("/updtStudents/:id", updateStudents);
router.put("/updtCompany/:id", updateCompany)

export default router;