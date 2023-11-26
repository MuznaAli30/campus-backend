import UserModal from "../Models/student.js";
import cloudinary from 'cloudinary';
// const cloudinary2 = cloudinary.v2
// const cloudinary = require('cloudinary').v2;

// Initialize Cloudinary configuration (usually done at the beginning of your application)

cloudinary.v2.config({
    cloud_name: 'dxpr2v8cu',
    api_key: '745436456875386',
    api_secret: 'czlXqeJ5-cjTWrJtIj40zpL6CpI'
});


import streamifier from 'streamifier';

const uploadtoCloudinary = async (fileBuffer) => {
  try {
    // Convert buffer to readable stream
    const stream = streamifier.createReadStream(fileBuffer);

    // Use the readable stream with cloudinary.uploader.upload_stream
    const result = await new Promise((resolve, reject) => {
      const cloudStream = cloudinary.v2.uploader.upload_stream(
        { resource_type: 'raw' },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );

      // Pipe the buffer to Cloudinary
      stream.pipe(cloudStream);
    });

    const fileLink = result.secure_url;
    console.log("file", fileLink);
    return fileLink;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error; // You may choose to handle or propagate the error as needed
  }
};

  export const updateStudents = async (req, res) => {
    const abc = req.params.id;
    console.log("abdd")
    try {
      // Access the uploaded file through req.file
      console.log(req.body);
      const uploadedFile = req.file;
  
      // Access other form data from req.body
      const { name, fatherName, contact } = req.body;
      console.log("info",name, fatherName, contact, uploadedFile )
      await uploadtoCloudinary(uploadedFile.buffer).then (async r=>{
        console.log("file link",r)
        // Your database update logic here
        console.log("id", req.params.id)
        let result = await UserModal.updateOne(
          { _id: req.params.id },
          { $set: { name, fatherName, contact,fileLink: r} } // Assuming you want to store the file data in the 'file' field
        );
        res.send(result);
     })

    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).send('Internal Server Error');
    }
  };

  export const get_single_data =  async (req, res) => {
    const id = req.params.id; 
    console.log(id);
  
    try {
      const contact = await UserModal.findById(id);
  
      if (contact) {
        res.status(200).json({ success: true, contact });  
      } 
      
      else {
        res.status(404).json({ success: false, message: 'Contact not found' });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  };

 
 

 