import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },


  ///////////

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

const Users = mongoose.model("Student", userSchema);
export default Users