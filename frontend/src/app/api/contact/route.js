// app/api/contact/route.js
export async function POST(req){
  const body = await req.json();
  console.log('contact form received', body);
  // For demo return 200
  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: {'Content-Type':'application/json'}});
}
