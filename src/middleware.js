import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken'; // Assuming you're using JSON Web Tokens (JWT)

// Middleware function to handle requests
export function middleware(request) {
  console.log('Middleware is triggered.');
  console.log('Request URL:', request.url);

  // Extract the token from cookies
  const tokendata = request.cookies.get('mytoken');
  console.log(tokendata);

  // If no token is found, redirect to the login page
  if (!tokendata) {
    console.log('No token found. Redirecting to login.');
    return NextResponse.redirect(new URL('/loginsignup', request.url));
  }


  try {
    // Validate the token (replace 'your-secret-key' with your actual secret key)
    console.log('Token checking valid before:');
    const stringifiedTokenData = JSON.stringify(tokendata);
    console.log(process.env.TOKEN_SECRET);
    const user = jwt.verify(tokendata, process.env.TOKEN_SECRET,{ algorithm: 'HS256' });

    console.log('Token is valid:',user);

    // Token is valid, proceed to the next response
    return NextResponse.redirect(new URL('/loginsignup', request.url));

  } catch (error) {
    console.log(error);
    console.log('Invalid token. Redirecting to login.');
    // Token is invalid, redirect to the login page
  }

}
  


// Configuration for which paths this middleware applies
export const config = {
  matcher: [
    '/',             // Root path (optional if you want to protect the root)
    '/dashboardvend', // Specific route
  ],
};
