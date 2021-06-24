import { Request, Response } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

class AuthenticateUserController {
  handle = async (request: Request, response: Response) => {
    const { email, password } = request.body;

    const service = new AuthenticateUserService();

    const token = await service.execute({ email, password });

    return response.json(token);
  };
}

export default AuthenticateUserController;
