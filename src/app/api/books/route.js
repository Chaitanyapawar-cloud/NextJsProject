let books = [];

export async function GET() {
  return new Response(JSON.stringify(books), { status: 200 });
}

export async function POST(req) {
  const body = await req.json();
  const id = books.length + 1;
  books.push({ ...body, id });
  return new Response(JSON.stringify({ message: 'Book added', id }), { status: 201 });
}
