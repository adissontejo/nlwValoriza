import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  handle = async (request: Request, response: Response) => {
    const { name, email, admin = false, password } = request.body;

    const service = new UserService();

    const user = await service.execute({ name, email, admin, password });

    return response.json(user);
  };
}

export default UserController;
