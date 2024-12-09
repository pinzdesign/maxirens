import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { success: true },
    {
      headers: {
        'Set-Cookie': `auth=; HttpOnly; Path=/; Max-Age=0`,
      },
    }
  );
}