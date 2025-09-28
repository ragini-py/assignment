const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");

const slidersRoutes = require("./routes/sliders");
const blogsRoutes = require("./routes/blogs");
const contactRoutes = require("./routes/contact");
const backgroundRoutes = require("./routes/backgroundRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// middleware
app.use(cors());
app.use(express.json());

// serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API routes
app.use("/api/sliders", slidersRoutes);
app.use("/api/blogs", blogsRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/backgrounds", backgroundRoutes);

app.get("/", (req, res) => res.send("Backend is running"));

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);