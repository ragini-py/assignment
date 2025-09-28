// app/api/contact/route.js
import API_BASE_URL from '../../../config';

export async function POST(req){
  try {
    const body = await req.json();
    const res = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      throw new Error('Failed to submit contact');
    }
    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to submit contact' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
