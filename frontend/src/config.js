// In your frontend code (e.g., config.js or at the top of your main files)
const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://auren-k0e7.onrender.com'
  : 'http://localhost:5000';

export default API_BASE_URL;
