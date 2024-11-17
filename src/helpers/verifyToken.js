// utils/verifyToken.js
import { jwtVerify } from 'jose';

export async function verifyToken(token) {
  try {
    // Replace with your actual JWT secret
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    // Verify the token and return the payload
    const { payload } = await jwtVerify(token, secret);
    return payload; // The decoded payload, including role, if present
  } catch (error) {
    console.error('JWT verification failed:', error);
    return null; // Return null if verification fails
  }
}
