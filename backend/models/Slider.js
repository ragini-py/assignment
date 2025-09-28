const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema(
  {
    headline: {
      type: String,
      required: [true, "Headline is required"],
      trim: true,
      maxlength: 150,
    },
    sub: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    image: {
      type: String,
      required: [true, "Image URL is required"],
      trim: true,
    },
    order: {
      type: Number,
      default: 0, // helps sort the sliders
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Slider", sliderSchema);
