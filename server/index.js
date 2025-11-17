import express from "express";
import cors from "cors"; //Allows to talk with frontend
import dotenv from "dotenv"; //to load .env
import path from "path" //help to handle files path
import { fileURLToPath } from "url";

//API Routes
import siteRoutes from "./routes/site.js";
import pagesRoutes from "./routes/pages.js";
import blocksRoutes from "./routes/blocks.js";
import assetsRoutes from "./routes/assets.js";


dotenv.config(); //load the env

const app= express();// Server Creation

app.use(cors()); //Access for frontend to talk to backend
app.use(express.json({limit:"10mb"})); //Let backend read JSON from frontend

//Need to correctly find our uploads folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/uploads",express.static(path.join(__dirname,"uploads"))); //Allow public access to uploaded files

//Registring of API routes
app.use("/api/site", siteRoutes);//Name,Bio, Logo,About
app.use("/api/pages", pagesRoutes); //Pages like "/"
app.use("/api/blocks", blocksRoutes); //Blocks like Hero/About
app.use("/api/assets", assetsRoutes); //Upload Images/fonts

//To start the server

const PORT = process.env.PORT || 5000;
app.listen(PORT,() =>{  
    console.log(`Server running at http://localhost:${PORT}`);
});



