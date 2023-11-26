import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  fatherName: {
    type: String,
    require: true,
  },
  contact: {
    type: String,
    require: true,
  },
  fileLink: {
    type: String,
    require: true,
  },

});

const Users = mongoose.model("StudentProfile", userSchema);
export default Users