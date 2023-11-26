import express from "express";
const router = express.Router();

import {addContact, getAllcontact, deletecontact, updatecontact} from "../Controller/contact.js";

router.post("/contact",addContact);
router.get("/allcontact",getAllcontact);
router.delete("/dltcontact",deletecontact);
router.put("/updtcontact",updatecontact);


export default router;