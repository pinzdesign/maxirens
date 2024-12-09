import { NextResponse } from 'next/server';

export async function POST(request) {
  const { email, password } = await request.json();

  if (email === 'test@mail.dk' && password === '1234') {
    const token = 'fake-jwt-token';
    return NextResponse.json(
      { success: true, token },
      {
        headers: {
          'Set-Cookie': `auth=${token}; HttpOnly; Path=/; Secure`,
        },
      }
    );
  }

  return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
}