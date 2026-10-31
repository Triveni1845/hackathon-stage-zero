export function GET() {
  return Response.json({
    status: 'ok',
    teamId: 'Triime',
    message: 'Backend connected successfully!'
  });
}