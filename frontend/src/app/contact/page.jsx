'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    goal: 'consultation',
    industry: 'tech',
    source: 'google',
    message: '',
    budget: 'under-10k',
    timeline: 'asap',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const res = await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to submit');
      setStatus('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        goal: 'consultation',
        industry: 'tech',
        source: 'google',
        message: '',
        budget: 'under-10k',
        timeline: 'asap',
      });
    } catch (err) {
      console.error(err);
      setStatus('Failed to send message. Try again.');
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6 tracking-tight">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
          We’d love to hear about your project, ideas, or partnership. Fill out the form below and our team will get back to you promptly.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-500 transition"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-500 transition"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-500 transition"
            />
            <input
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-500 transition"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <select
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-500 transition"
            >
              <option value="consultation">Consultation</option>
              <option value="project">Project</option>
              <option value="partnership">Partnership</option>
              <option value="hiring">Hiring</option>
              <option value="other">Other</option>
            </select>

            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-500 transition"
            >
              <option value="tech">Tech</option>
              <option value="finance">Finance</option>
              <option value="healthcare">Healthcare</option>
              <option value="ecommerce">Ecommerce</option>
              <option value="education">Education</option>
              <option value="other">Other</option>
            </select>

            <select
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-500 transition"
            >
              <option value="google">Google</option>
              <option value="referral">Referral</option>
              <option value="social">Social</option>
              <option value="direct">Direct</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-500 transition"
            >
              <option value="under-10k">Under $10k</option>
              <option value="10k-25k">$10k–25k</option>
              <option value="25k-50k">$25k–50k</option>
              <option value="50k-100k">$50k–100k</option>
              <option value="over-100k">Over $100k</option>
            </select>

            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-500 transition"
            >
              <option value="asap">ASAP</option>
              <option value="1-3months">1–3 months</option>
              <option value="3-6months">3–6 months</option>
              <option value="6months+">6 months+</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-500 transition"
          />

          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            {status || 'Send Message'}
          </button>

          {status && <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{status}</p>}
        </form>
      </div>
    </main>
  );
}
