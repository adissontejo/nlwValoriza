import { Request, Response } from 'express';

import { CreateUserService } from '../services';

class CreateUserController {
  handle = async (request: Request, response: Response) => {
    const { name, email, admin = false, password } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      email,
      admin,
      password,
    });

    return response.json(user);
  };
}

export default CreateUserController;
