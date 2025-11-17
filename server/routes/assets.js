// Import Router to handle file upload routes
import { Router } from "express";

// Multer handles file uploads (images, fonts, etc.)
import multer from "multer";

// Helps build file paths dynamically
import path from "path";
import { fileURLToPath } from "url";

// Import Prisma db (to save uploaded font records)
import { prisma } from "../db.js";

// Create a new router instance
const router = Router();


// ======================================================================
// CONFIGURE STORAGE FOR UPLOADED FILES
// ======================================================================
/// Multer needs to know:
// (1) Where to store the uploaded file
// (2) What to name the uploaded file
// ======================================================================

// Resolve the path to the uploads directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure Multer storage engine
const storage = multer.diskStorage({
  // Folder where files will be stored
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", "uploads"));
  },

  // File renaming logic
  filename: (req, file, cb) => {
    // Example output: 17012344123-myFont.woff2
    const safeName = Date.now() + "-" + file.originalname.replace(/\s+/g, "_");
    cb(null, safeName);
  }
});

// Create an upload handler using our storage settings
const upload = multer({ storage });


// ======================================================================
// 1) POST /api/assets/font
// ======================================================================
// Purpose:
// Upload a custom font file (woff, woff2, ttf, etc.)
// and save a record of the font in the database.
//
// After uploading:
// The font will be accessible at: http://localhost:5000/uploads/<filename>
//
// Example frontend usage:
// const form = new FormData();
// form.append("file", fontFile);
// form.append("family", "MyCustomFont");
// form.append("weight", "400");
// form.append("style", "normal");
// fetch("/api/assets/font", { method: "POST", body: form });
// ======================================================================

router.post("/font", upload.single("file"), async (req, res) => {
  try {
    // First get the site (only one site exists)
    const site = await prisma.site.findFirst();

    // Get URL of uploaded file
    const fileUrl = "/uploads/" + req.file.filename;

    // Save font record in DB
    const font = await prisma.font.create({
      data: {
        siteId: site.id,
        family: req.body.family || "Custom Font",
        weight: req.body.weight || "400",
        style: req.body.style || "normal",
        url: fileUrl
      }
    });

    res.json(font);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to upload font" });
  }
});


// ======================================================================
// 2) (Optional) Add upload for images/logos (you can enable when needed)
// ======================================================================
// Example: POST /api/assets/image
// Handles logo upload, hero image, about section image, etc.
// ======================================================================

// Uncomment this section if you want image upload:


router.post("/image", upload.single("file"), async (req, res) => {
  try {
    const fileUrl = "/uploads/" + req.file.filename;
    res.json({ url: fileUrl }); // frontend will get the image URL
  } catch (err) {
    res.status(500).json({ error: "Failed to upload image" });
  }
});



// Export router so index.js can use it
export default router;
