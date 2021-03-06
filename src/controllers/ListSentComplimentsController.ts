import { Request, Response } from 'express';

import { ListSentComplimentsService } from '../services';

class ListSentComplimentsController {
  handle = async (request: Request, response: Response) => {
    const { user_id } = request;

    const listSentComplimentsService = new ListSentComplimentsService();

    const compliments = await listSentComplimentsService.execute(user_id);

    return response.json(compliments);
  };
}

export default ListSentComplimentsController;
