import { NextResponse } from 'next/server';

export function middleware(request : any) {
  const token = request.cookies.get('auth')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};