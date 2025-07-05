// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';
import jwt from 'jsonwebtoken';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;

  const { pathname } = req.nextUrl;

  // Public routes: no check
  if (pathname.startsWith('/login') || pathname === '/') {
    return NextResponse.next();
  }

  // Check for token
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    const user = jwt.verify(token, 'secret123') as any;

    // Admin route check
    if (pathname.startsWith('/admin') && user.role !== 'admin') {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    // Authenticated user
    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'],
};
