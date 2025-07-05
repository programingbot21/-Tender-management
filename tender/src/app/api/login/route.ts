// app/api/login/route.ts
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  // Dummy check
  if (email === 'admin@example.com' && password === 'admin') {
    const token = jwt.sign({ email, role: 'admin' }, 'secret123', {
      expiresIn: '1h',
    });

    const response = NextResponse.json({ success: true });
    response.cookies.set('token', token, { httpOnly: true });

    return response;
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}
