// app/api/blogs/route.js
export async function GET() {
  const blogs = [
    { id: '1', title: 'Launching our new design system', date: '2025-06-10' },
    { id: '2', title: 'How we do user research', date: '2025-05-25' },
    { id: '3', title: 'Optimizing next-gen UI performance', date: '2025-04-15' },
  ];
  return new Response(JSON.stringify({ blogs }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
