// Sample Sveltekit API endpoint
export default async function GET({ params }) {
  const data = { name: 'John Doe', params };

  return new Response(JSON.stringify(data));
}
