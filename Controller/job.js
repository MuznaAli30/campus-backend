import UserModal from "../Models/job.js";

export const addjob = async (req, res) => { 
  const { jobDescription, jobTitle, CompanyID } = req.body;
  try {
    const result = await UserModal.create({ jobDescription, jobTitle, CompanyID });


    res.status(201).json({ success: true, });
  } catch (error) {
    if (!jobDescription || !jobTitle || !userid) {
    res.status(500).json({ success: false, message: "Something went wrong" });
    console.log(error);
  }}
};

export const getAllUsers = async ( req,res) => {
  try {
    const users = await UserModal.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};


// delete api 
export const deletepost = async (req, res) => {
  const abc='653543aa27d694328f380502'
  // const abc = req.params.id;
  let result = await UserModal.deleteOne(
    { _id: req.body},
    { $set: req.body }
  );
  res.send(abc);
};

// update api mineeeeeeeee
export const updatepost = async (req, res) => {
  const abc = req.params.id;
  let result = await UserModal.updateOne(
    { _id: req.params.id },
    { $push: { applicants: req.body.applicants } }
  );
  res.send(abc);
};


// for check update 
// export const updatepost = async (req, res) => {
//   const jobId = req.params.id;
//   const userId = req.body.userId; // Assuming userId is sent from the frontend

//   // Check if the user has already applied for this job
//   const job = await UserModal.findOne({ _id: jobId, 'applicants.id': userId });

//   if (job) {
//     res.status(400).send('User has already applied for this job');
//   } else {
//     // Update applicants array if the user hasn't applied
//     let result = await UserModal.updateOne(
//       { _id: jobId },
//       { $push: { applicants: req.body.applicants } }
//     );
//     res.status(200).send('Application successful');
//   }
// };

