import express from "express";
import cors from "cors"; 
import mongoose from "mongoose";
import jobRoutes from "./Routes/job.js";
import registrationRoutes from "./Routes/regsitartion.js"
import studentProfileRoutes from "./Routes/StudentProfile.js"
import contactRoutes from "./Routes/contact.js";
import studentRoutes from "./Routes/student.js";
import multer from "multer";
import bodyParser from "body-parser";

const PORT = 3005;
const app = express();
app.use(express.json());
app.use(cors());

const storage = multer.memoryStorage(); // Store the file in memory as a Buffer
const upload = multer({ storage: storage });

// Apply middleware for parsing form data before the routes
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.single('file')); // Apply multer middleware before the route handlers

app.get("/", (req, res) => res.status(200).send("Hello world"));

app.use("/job", jobRoutes);
app.use("/contact", contactRoutes); 
app.use("/student", studentRoutes);
app.use("/registration", registrationRoutes);
app.use("/createStudentProfile", studentProfileRoutes);

const CONNECTION_URL = "mongodb+srv://MyCampus:LYGahiPFgA2vQjjD@cluster0.moru8d6.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected Successfully.');
  })
  .catch((err) => console.log('No connection ', err));

const server = app.listen(PORT, () =>
  console.log("Listening on port ", PORT)
);
