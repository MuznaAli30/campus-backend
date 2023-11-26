import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    jobTitle:{
        type : String,
        require: true,
    },
    jobDescription:{
        type : String,
        require: true,
    },
    CompanyID:{
        type : String,
        require: true,
    },
    applicants: [
        {
            _id: false, // Disable the _id field for subdocuments
            id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            fileLink: {
                type:String,
                required: true
            }

        }
    ] 
})

const Users = mongoose.model("job",userSchema);
export default Users