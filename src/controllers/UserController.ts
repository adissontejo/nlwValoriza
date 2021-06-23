import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  handle = async (request: Request, response: Response) => {
    const { name, email, admin = false } = request.body;

    const service = new UserService();

    const user = await service.execute({ name, email, admin });

    return response.json(user);
  };
}

export default UserController;
