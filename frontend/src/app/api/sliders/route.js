// app/api/sliders/route.js
import API_BASE_URL from '../../../config';

export async function GET() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/sliders`);
    if (!res.ok) {
      throw new Error('Failed to fetch sliders');
    }
    const data = await res.json();
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch sliders' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
