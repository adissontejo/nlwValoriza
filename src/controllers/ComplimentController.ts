import { Request, Response } from 'express';

import ComplimentService from '../services/ComplimentService';

class ComplimentController {
  handle = async (request: Request, response: Response) => {
    const { tag_id, user_sender, user_receiver, message } = request.body;

    const service = new ComplimentService();

    const compliment = await service.execute({
      tag_id,
      user_sender,
      user_receiver,
      message,
    });

    return response.json(compliment);
  };
}

export default ComplimentController;
