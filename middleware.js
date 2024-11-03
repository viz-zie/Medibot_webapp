import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) 
{
    const path = request.nextURL.pathname

    const isPublicPath = path === '/loginsignup'

    const token = request.cookies.get('token')?.value || ''

    if(isPublicPath && token) {

        return NextResponse.redirect(new URL('/',request.nextURL))
    }

    if(!isPublicPath && !token)
    {
        return NextResponse.redirect(new URL('/loginsignup',request.nextURL))
    }
}
 
// See "Matching Paths" below to learn more
export const config = 
{
  matcher: [
    '/',
    '/services',
    '/dashboard',
    '/aboutus',
    '/loginsignup',

  ]

}