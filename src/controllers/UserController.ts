import { Request, Response } from 'express';
import UserService from '../services/UserService';

const UserController = async (request: Request, response: Response) => {
  const { name, email, admin = false } = request.body;

  const user = await UserService({ name, email, admin });

  return response.json(user);
};

export default UserController;
