import { Request, Response } from 'express';

import TagService from '../services/TagService';

class TagController {
  handle = async (request: Request, response: Response) => {
    const { name } = request.body;

    const service = new TagService();

    const tag = await service.execute(name);

    return response.json(tag);
  };
}

export default TagController;
