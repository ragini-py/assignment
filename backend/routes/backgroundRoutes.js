const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const BackgroundImage = require("../models/BackgroundImage");

const router = express.Router();

// store files locally
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/backgrounds"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Upload new background image
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const imageUrl = `/uploads/backgrounds/${req.file.filename}`;
    const image = new BackgroundImage({ url: imageUrl });
    await image.save();
    res.json({ success: true, image });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get all background images
router.get("/", async (req, res) => {
  try {
    const images = await BackgroundImage.find().sort({ createdAt: -1 });
    res.json({ success: true, images });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Delete background image by ID
router.delete("/:id", async (req, res) => {
  try {
    const image = await BackgroundImage.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ success: false, message: "Image not found" });
    }

    const filePath = path.join(process.cwd(), "uploads", "backgrounds", path.basename(image.url));
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    await BackgroundImage.findByIdAndDelete(req.params.id);

    res.json({ success: true, message: "Image deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;