export async function GET() {
  try {
    const res = await fetch('http://localhost:5000/api/backgrounds');
    if (!res.ok) {
      throw new Error('Failed to fetch backgrounds');
    }
    const data = await res.json();
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch backgrounds' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('image');
    const fields = {};
    for (const [key, value] of formData.entries()) {
      if (key !== 'image' && typeof value !== 'object') {
        fields[key] = value;
      }
    }

    const backendFormData = new FormData();
    if (file) {
      backendFormData.append('image', file);
    }
    for (const [key, value] of Object.entries(fields)) {
      backendFormData.append(key, value);
    }

    const res = await fetch('http://localhost:5000/api/backgrounds/upload', {
      method: 'POST',
      body: backendFormData,
    });

    if (!res.ok) {
      throw new Error('Failed to upload background');
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to upload background' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
