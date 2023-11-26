import bcrypt from "bcryptjs";
import UserModal from "../Models/student.js";
import CompanyModal from "../Models/company.js";

const secret = 'test';

//mineeeee
// export const signin = async (req, res) => {
//   const { username, password } = req.body;
  

//   // Check if the user exists in the UserModel
//   const userInUserModal = await UserModal.findOne({ username });

//   if (userInUserModal) {
//     // User found in UserModel, check password
//     const isPasswordCorrect = await bcrypt.compare(password, userInUserModal.password);
//     if (isPasswordCorrect) {
//       res.status(200).json({ result: userInUserModal, success: true });
//       return; // Return to avoid further execution
//     }
//   }

//   // If user not found in UserModel, check in CompanyModel
//   const userInCompanyModal = await CompanyModal.findOne({ username });

//   if (userInCompanyModal) {
//     // User found in CompanyModel, check password
//     const isPasswordCorrect = await bcrypt.compare(password, userInCompanyModal.password);
//     if (isPasswordCorrect) {
//       res.status(200).json({ result: userInCompanyModal, success: true });
//       return; // Return to avoid further execution
//     }
//   }

//   // If the user is not found in either model, return a 404 status
//   res.status(404).json({ message: "User doesn't exist or invalid credentials" });
// };

//for checkk
export const signin = async (req, res) => {
  const { username, password } = req.body;

  if (username === "Admin" && password === "Admin1") {
    // Credentials match for Admin
    res.status(200).json({ success: true, role: "admin" });
    return;
  }

  // Check if the user exists in the UserModel
  const userInUserModal = await UserModal.findOne({ username });

  if (userInUserModal) {
    // User found in UserModel, check password
    const isPasswordCorrect = await bcrypt.compare(password, userInUserModal.password);
    if (isPasswordCorrect) {
      res.status(200).json({ result: userInUserModal, success: true });
      return; // Return to avoid further execution
    }
  }

  // If user not found in UserModel, check in CompanyModel
  const userInCompanyModal = await CompanyModal.findOne({ username });

  if (userInCompanyModal) {
    // User found in CompanyModel, check password
    const isPasswordCorrect = await bcrypt.compare(password, userInCompanyModal.password);
    if (isPasswordCorrect) {
      res.status(200).json({ result: userInCompanyModal, success: true });
      return; // Return to avoid further execution
    }
  }

  // If the user is not found in either model, return a 404 status
  res.status(404).json({ message: "User doesn't exist or invalid credentials" });
};


//mineee
export const signup = async (req, res) => {
  console.log("abc", req.body)
  const { email, password, username, role } = req.body;
  

  if (role === 'student') {
    try {
      const oldUser = await UserModal.findOne({ email });

      if (oldUser) {
        return res.status(400).json({ success: false, message: "User already exists" });
      }


      const hashedPassword = await bcrypt.hash(password, 12);

      const result = await UserModal.create({ email, password: hashedPassword, username, role: 'student',name:'sas' });

      res.status(201).json({ success: true, result});
    } catch (error) {
      res.status(500).json({ success: false, message: "Something went wrong" });
      console.log(error);
    }
  }
  else {
    try {
      const oldUser = await CompanyModal.findOne({ email });

      if (oldUser) {
        return res.status(400).json({ success: false, message: "User already exists" });
      }


      const hashedPassword = await bcrypt.hash(password, 12);

      const result = await CompanyModal.create({ email, password: hashedPassword, username, role: 'company' });

      res.status(201).json({ success: true, result});
    } catch (error) {
      res.status(500).json({ success: false, message: "Something went wrong" });
      console.log(error);
    }
  }
};

// for check
// export const signup = async (req, res) => {
//   const { email, password, username, role } = req.body;

//   if (!role || !username || !email || !password) {
//     return res.status(400).json({ success: false });
//   }

//   if (role === 'student') {
//     try {
//       const oldUser = await UserModal.findOne({ email });

//       if (oldUser) {
//         return res.status(400).json({ success: false, message: "User already exists" });
//       }

//       const hashedPassword = await bcrypt.hash(password, 12);

//       const result = await UserModal.create({ email, password: hashedPassword, username, role: 'student' });

//       return res.status(201).json({ success: true, message: "Registration successful", result });
//     } catch (error) {
//       res.status(500).json({ success: false, message: "Something went wrong" });
//       console.log(error);
//     }
//   } else {
//     try {
//       const oldUser = await CompanyModal.findOne({ email });

//       if (oldUser) {
//         return res.status(400).json({ success: false, message: "User already exists" });
//       }

//       const hashedPassword = await bcrypt.hash(password, 12);

//       const result = await CompanyModal.create({ email, password: hashedPassword, username, role: 'company' });

//       return res.status(201).json({ success: true, message: "Registration successful", result });
//     } catch (error) {
//       return res.status(500).json({ success: false, message: "Something went wrong" });
//     }
//   }
// };




export const getStudents = async ( req,res) => {
  try {
    const users = await UserModal.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getCompany = async ( req,res) => {
  try {
    const users = await CompanyModal.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};


  // delete api OF STUDENT
  export const deleteStudents = async (req, res) => {
    const id = req.params.id; // Get the ID from URL parameter
    console.log(id);
  
    // Use the ID to delete the record
    let result = await UserModal.deleteOne({ _id: id });
  
    // Send a response to indicate success or failure
    if (result.deletedCount === 1) {
      res.send('Deletion successful');
    } else {
      res.status(404).send('Contact not found');
    }
  };

    // delete api OF COMPANY
    export const deleteCompany = async (req, res) => {
      const id = req.params.id; // Get the ID from URL parameter
      console.log(id);
    
      // Use the ID to delete the record
      let result = await CompanyModal.deleteOne({ _id: id });
    
      // Send a response to indicate success or failure
      if (result.deletedCount === 1) {
        res.send('Deletion successful');
      } else {
        res.status(404).send('Contact not found');
      }
    };
  
  // update api OF STUDENTS
  export const updateStudents = async (req, res) => {
    const abc='65374aab1e9618e6de2c3e82'
    // const abc = req.params.id;
    let result = await UserModal.updateOne(
      { _id: req.body },
      { $set: req.body }
    );
  
    res.send(abc);
  };

    // update api OF COMPANY
    export const updateCompany = async (req, res) => {
      const abc='65374aab1e9618e6de2c3e82'
      // const abc = req.params.id;
      let result = await CompanyModal.updateOne(
        { _id: req.body },
        { $set: req.body }
      );
    
      res.send(abc);
    };

    
//student password change
    export const ChangePassword = async (req, res) => {
      try {
        // const { email, oldPassword, newPassword, newPassword2 } = req.body;
        const { email, oldPassword, newPassword } = req.body;

    
        // Find user by unique identifier (e.g., user ID or email)
        const user = await UserModal.findOne({ email });
        // const user2 = await CompanyModal.findOne({ email });

    
        if (!user) {
        // if (!user || !user2) {

          res.status(400).send('User not found');
          return;
        }
    
        // Compare hashed oldPassword with the stored hashed password
        const isPasswordMatch = await bcrypt.compare(oldPassword, user.password);
        // const isPasswordMatch2 = await bcrypt.compare(oldPassword, user2.password);
    
        if (isPasswordMatch) {
        // if (isPasswordMatch || isPasswordMatch2) {
          // Hash the new password before saving
          const hashedNewPassword = await bcrypt.hash(newPassword, 12);
          user.password = hashedNewPassword;

          // const hashedNewPassword2 = await bcrypt.hash(newPassword2, 12);
          // user2.password = hashedNewPassword2;
    
          // Save the updated user
          await user.save();
          // await user2.save();
    
          res.status(200).send('User Password updated successfully');
        } else {
          res.status(400).send('Old password does not match');
        }
      } catch (error) {
        res.status(400).send(error);
      }
    };


    // Company password change
    export const passwordChangeCompany = async (req, res) => {
      try {
        // const { email, oldPassword, newPassword, newPassword2 } = req.body;
        const { email, currentPassword, newPassword } = req.body;

    
        // Find user by unique identifier (e.g., user ID or email)
        const user = await CompanyModal.findOne({ email });

    
        if (!user) {
        // if (!user || !user2) {

          res.status(400).send('User not found');
          return;
        }
    
        // Compare hashed oldPassword with the stored hashed password
        const isPasswordMatch = await bcrypt.compare(currentPassword, user.password);
        // const isPasswordMatch2 = await bcrypt.compare(oldPassword, user2.password);
    
        if (isPasswordMatch) {
        // if (isPasswordMatch || isPasswordMatch2) {
          // Hash the new password before saving
          const hashedNewPassword = await bcrypt.hash(newPassword, 12);
          user.password = hashedNewPassword;

          // const hashedNewPassword2 = await bcrypt.hash(newPassword2, 12);
          // user2.password = hashedNewPassword2;
    
          // Save the updated user
          await user.save();
          // await user2.save();
    
          res.status(200).send('User Password updated successfully');
        } else {
          res.status(400).send('Old password does not match');
        }
      } catch (error) {
        res.status(400).send(error);
      }
    };
    

 