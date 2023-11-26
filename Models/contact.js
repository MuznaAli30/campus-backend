import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    fulname:{
        type : String,
    },
    email:{
        type : String,
    }
})

const contactData = mongoose.model("contact",contactSchema);
export default contactData