// app/api/sliders/route.js
export async function GET() {
  // Return 5 slider groups, each with items
  const sliders = [
    { id: 's1', items: [
      { headline: 'Design system', sub: 'Atomic components & tokens' },
      { headline: 'Branding', sub: 'Logo & Visual language' }
    ]},
    { id: 's2', items: [
      { headline: 'Product design', sub: 'User flows & prototypes' },
      { headline: 'Research', sub: 'User interviews & testing' }
    ]},
    { id: 's3', items: [
      { headline: 'Strategy', sub: 'Roadmaps & discovery' },
      { headline: 'Workshops', sub: 'Co-creation & alignment' }
    ]},
    { id: 's4', items: [
      { headline: 'Engineering', sub: 'Frontend & backend' },
      { headline: 'DevOps', sub: 'CI/CD & infra' }
    ]},
    { id: 's5', items: [
      { headline: 'Culture', sub: 'Hiring & growth' },
      { headline: 'Events', sub: 'Meetups & talks' }
    ]},
  ];

  return new Response(JSON.stringify({ sliders }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
