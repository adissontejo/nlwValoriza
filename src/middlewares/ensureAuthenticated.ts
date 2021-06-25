import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

type Payload = {
  sub: string;
};

const ensureAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = request.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    return response.status(400).json({ error: 'Invalid token' });
  }

  try {
    const { sub } = verify(token, process.env.PRIVATE_KEY) as Payload;
    request.user_id = sub;
  } catch (e) {
    return response.status(400).json({ error: 'Invalid token' });
  }

  return next();
};

export default ensureAuthenticated;
