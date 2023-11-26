import studentModal from "../Models/StudentProfile.js";


export const addProfile = async (req, res) => { 
  const { name,fatherName, contact,fileLink } = req.body;
  console.log(name,fatherName,contact,fileLink)


  try {
    const result = await studentModal.create({name, fatherName,contact,fileLink});

    res.status(201).json({ success: true, });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong" });
    console.log(error);
  }
};

export const getProfile = async ( req,res) => {
  try {
    const users = await studentModal.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// import studentModal from "../Models/StudentProfile.js";
// import cloudinary from 'cloudinary';

// // Initialize Cloudinary configuration (usually done at the beginning of your application)

// cloudinary.v2.config({
//     cloud_name: 'dxpr2v8cu',
//     api_key: '745436456875386',
//     api_secret: 'czlXqeJ5-cjTWrJtIj40zpL6CpI'
// });

// export const addProfile = async (req, res) => { 
//     const { name, fatherName, contact } = req.body;

//     if (!req.file) {
//         return res.status(400).json({ success: false, message: "File is required" });
//     }

//     try {
//         const result = await cloudinary.v2.uploader.upload(req.file.path, { resource_type: 'auto' });

//         const fileLink = result.secure_url;
//         const publicId = result.public_id;

        
//         const createdProfile = await studentModal.create({ name, fatherName, contact, fileLink, publicId });

//         res.status(201).json({ success: true, message: "Profile created successfully" });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ success: false, message: "Something went wrong" });
//     }
// };

// export const getProfile = async (req, res) => {
//   try {
//       const profiles = await studentModal.find();
//       res.status(200).json(profiles);
//   } catch (error) {
//       console.log(error);
//       res.status(500).json({ message: 'Internal server error' });
//   }
// };
