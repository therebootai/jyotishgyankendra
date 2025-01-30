export async function GET(req) {
  return NextResponse.json(
    { message: "Hello World from API JyotiSh Gyan Kendra" },
    { status: 200 }
  );
}
