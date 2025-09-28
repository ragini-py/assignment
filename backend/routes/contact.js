const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// ✅ GET all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ contacts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});

// ✅ GET single contact by ID
router.get("/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ error: "Contact not found" });
    res.json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch contact" });
  }
});

// ✅ POST new contact
router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Failed to create contact", details: err.message });
  }
});

// ✅ PUT update contact
router.put("/:id", async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedContact) return res.status(404).json({ error: "Contact not found" });
    res.json(updatedContact);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Failed to update contact", details: err.message });
  }
});

// ✅ DELETE contact
router.delete("/:id", async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) return res.status(404).json({ error: "Contact not found" });
    res.json({ message: "Contact deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete contact" });
  }
});

module.exports = router;
