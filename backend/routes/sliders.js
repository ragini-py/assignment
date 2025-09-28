const express = require("express");
const Slider = require("../models/Slider");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// ✅ GET all sliders
router.get("/", async (req, res) => {
  try {
    const sliders = await Slider.find().sort({ order: 1, createdAt: -1 });
    res.json({ sliders });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch sliders" });
  }
});

// ✅ GET one slider by ID
router.get("/:id", async (req, res) => {
  try {
    const slider = await Slider.findById(req.params.id);
    if (!slider) return res.status(404).json({ error: "Slider not found" });
    res.json(slider);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch slider" });
  }
});

// ✅ POST new slider

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { headline, sub, order, isActive } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    if (!image) return res.status(400).json({ error: "Image is required" });

    const newSlider = new Slider({ headline, sub, order, isActive, image });
    const saved = await newSlider.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ PUT update slider
router.put("/:id", async (req, res) => {
  try {
    const updated = await Slider.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: "Slider not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Failed to update slider" });
  }
});

// ✅ DELETE slider
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Slider.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Slider not found" });
    res.json({ message: "Slider deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete slider" });
  }
});

module.exports = router;
