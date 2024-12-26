import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
// import multer from "multer";

import { fileURLToPath } from "url";
import bodyParser from "body-parser";


// import { register } from './controllers/auth.js'
// import { createPost } from './controllers/posts.js'
// import { verifyToken } from './middleware/auth.js'

//  Routes
// import authRoutes from './routes/auth.js'
// import userRoutes from './routes/users.js'
// import postRoutes from './routes/posts.js'

dotenv.config();

const app: Application = express();
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});


// // set file storage
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "public/assets")
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname)
//     }
// })

// const upload = multer({ storage })


// app.get('/', (req, res) => {
//     res.json({ message: "Test!" })
// })



// app.post("/auth/register", upload.single("picture"), register)
// app.post("/posts", verifyToken, upload.single("picture"), createPost)


// // Routes 
// app.use("/auth", authRoutes)
// app.use("/users", userRoutes)
// app.use("/posts", postRoutes)

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
