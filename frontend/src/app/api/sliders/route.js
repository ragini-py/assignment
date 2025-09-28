// app/api/sliders/route.js
export async function GET() {
  try {
    const res = await fetch('http://localhost:5000/api/sliders');
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
