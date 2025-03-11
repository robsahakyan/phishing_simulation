import { verify } from 'jsonwebtoken';

const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET_KEY; 

export function verifyToken(token: string) {
  try {
    const decoded = verify(token, SECRET_KEY as string);
    
    return { valid: true, decoded };
  } catch (err) {
    return { valid: false };
  }
}