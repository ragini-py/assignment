// components/PopupContact.jsx
'use client';
import { useEffect, useState } from 'react';

export default function PopupContact() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({
    email: '',
    goal: '',
    industry: '',
    source: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setForm({ email: "", goal: "", industry: "", source: "" });
      setVisible(false);
    } catch (err) {
      console.error(err);
    }
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
      onClick={() => setVisible(false)} // closes popup when clicking overlay
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative"
        onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside form
      >
        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {/* Heading */}
        <p className="text-sm text-gray-700 mb-3">
          Would you like to receive cases related to your industry?
        </p>
        <p className="text-sm text-gray-700 mb-3">
          Fill in the data and receive a selection link via email within 5 minutes.
        </p>
        <p className="text-sm text-gray-700 mb-3">
          If you are looking for a job, select <b>Job candidate</b> in the <b>Your Goal</b> field.
        </p>
        <p className="text-xs text-gray-500 mb-5">
          * You can find the letter in the <b>Inbox</b> or <b>Promotions</b> folder
        </p>

        {/* Form */}
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-2 border rounded"
          />

          <select
            required
            value={form.goal}
            onChange={(e) => setForm({ ...form, goal: e.target.value })}
            className="w-full p-2 border rounded"
          >
            <option value="">Your Goal</option>
            <option value="job_candidate">Job Candidate</option>
            <option value="networking">Networking</option>
            <option value="business">Business</option>
          </select>

          <select
            required
            value={form.industry}
            onChange={(e) => setForm({ ...form, industry: e.target.value })}
            className="w-full p-2 border rounded"
          >
            <option value="">Choose Industry</option>
            <option value="it">IT</option>
            <option value="finance">Finance</option>
            <option value="marketing">Marketing</option>
          </select>

          <select
            required
            value={form.source}
            onChange={(e) => setForm({ ...form, source: e.target.value })}
            className="w-full p-2 border rounded"
          >
            <option value="">WHERE DID YOU HEAR ABOUT US?</option>
            <option value="google">Google</option>
            <option value="linkedin">LinkedIn</option>
            <option value="friend">Friend</option>
          </select>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded"
          >
            → Take examples
          </button>
        </form>
      </div>
    </div>
  );
}
