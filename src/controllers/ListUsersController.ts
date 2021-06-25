import { Request, Response } from 'express';

import { ListUsersService } from '../services';

class ListUsersController {
  handle = async (request: Request, response: Response) => {
    const listUsersService = new ListUsersService();

    const users = await listUsersService.execute();

    return response.json(users);
  };
}

export default ListUsersController;
