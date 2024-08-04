import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const middleware = (request) => {
  // const token = request.cookies.get('token');
  const token = cookies(request).get('next-auth.session-token')
console.log(token);
  if (!token) {
    return NextResponse.redirect(new URL('/api/auth/signin', request.url));
  }

  // return NextResponse.redirect(new URL('/about', request.url));


  return NextResponse.next();
};

export const config = {
  matcher: ['/Dashboard/modarator', '/blogs'],
};
