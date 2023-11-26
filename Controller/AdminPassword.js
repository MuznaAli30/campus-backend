// // import AdminModel from "../Models/job.js";

// export const AdminController = async (req, res) => { 
//     const { username, password } = req.body
    
//     try {
//         if (username === 'Admin' && password === 'Admin1') {
//             res.status(201).json({ success: true });
//         } else {
//             res.status(401).json({ success: false, message: 'Invalid username or password' });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: 'Something went wrong' });
//     }
// }    