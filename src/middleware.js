
import { NextResponse } from 'next/server';
import { verifyToken } from './helpers/verifyToken';
import { jwtVerify } from 'jose';


// This function can be marked `async` if using `await` inside
export async function middleware(request) 
{
  
  {/*
  
  console.log('inside middleware')
  
  const mytoken = request.cookies.get('token')?.value;
  //console.log(mytoken)
  if (!mytoken) return NextResponse.redirect(new URL('/', request.url))   // Decode and verify the JWT to extract the role
     try{

      const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);
      const { payload } = await jwtVerify(mytoken, secret);
      if (!payload) 
        {
           // If verification fails, redirect to login
          return NextResponse.redirect(new URL('/loginsignup', request.url));
        }
      
         // Attach role to request for later use      
      
        const userRole = payload.role;  
        console.log(userRole);
        // Conditionally redirect based on user role
        if (userRole === 'Customer') 
        {
        return NextResponse.redirect(new URL('/', request.url));
        } 
        else if (userRole === 'Vendor') 
        {
        return NextResponse.redirect(new URL('/', request.url));
        }
      
        // Allow access to the requested page if role matches
        return NextResponse.next();
     }
     catch{

      return NextResponse.redirect(new URL('/loginsignup', request.url));

     }

 */}
     

 
  
  

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
           // Root path (optional if you want to protect the root)
    '/dashboardvend', 
    '/dashboardcust',
    // Specific route
  ],
};

