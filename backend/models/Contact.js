const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    email: { 
      type: String, 
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      validate: {
        validator: v =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(v),
        message: "Please enter a valid email address",
      },
    },
    name: { type: String, trim: true, maxlength: 100 },
    company: { type: String, trim: true, maxlength: 100 },
    phone: {
      type: String,
      trim: true,
      validate: {
        validator: v => !v || /^[\+]?[1-9][\d]{0,15}$/.test(v),
        message: "Please enter a valid phone number",
      },
    },
    goal: {
      type: String,
      enum: ["job_candidate", "networking", "business", "consultation", "partnership", "hiring", "other"],
      required: true,
    },
    industry: {
      type: String,
      enum: ["it", "finance", "marketing", "tech", "healthcare", "ecommerce", "education", "other"],
      required: true,
    },
    source: {
      type: String,
      enum: ["google", "linkedin", "friend", "referral", "social", "direct", "other"],
      required: true,
    },
    message: { type: String, trim: true, maxlength: 1000 },
    budget: {
      type: String,
      enum: ["under-10k", "10k-25k", "25k-50k", "50k-100k", "over-100k"],
    },
    timeline: {
      type: String,
      enum: ["asap", "1-3months", "3-6months", "6months+"],
    },
    status: {
      type: String,
      enum: ["new", "contacted", "qualified", "proposal", "closed", "archived"],
      default: "new",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    notes: { type: String, trim: true },
    lastContactedAt: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", ContactSchema);
