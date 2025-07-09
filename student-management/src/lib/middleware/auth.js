import jwt from 'jsonwebtoken';

export function verifyToken(req) {
  try {
    const authHeader = req.headers.get('authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { status: 401, error: 'Unauthorized: No token provided' };
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return { status: 200, user: decoded };
  } catch (err) {
    return { status: 401, error: 'Unauthorized: Invalid token' };
  }
}
