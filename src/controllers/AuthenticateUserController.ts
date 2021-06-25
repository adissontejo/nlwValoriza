import { Request, Response } from 'express';

import { AuthenticateUserService } from '../services';

class AuthenticateUserController {
  handle = async (request: Request, response: Response) => {
    const { email, password } = request.body;

    const authenticateUserService = new AuthenticateUserService();

    const token = await authenticateUserService.execute({ email, password });

    return response.json(token);
  };
}

export default AuthenticateUserController;
