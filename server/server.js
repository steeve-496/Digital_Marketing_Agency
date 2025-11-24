import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import contentRoutes from "./routes/contentRoutes.js"

dotenv.config()  //load env

const app = express();

app.use(cors());
app.use(express.json()); //accept json data

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log("✅ MongoDB Connected "))
    .catch(err=> console.log(err));

app.use("/api/content",contentRoutes);

app.listen(5000,()=> console.log("✅ Backend running on port 5000"));