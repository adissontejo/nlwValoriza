import { Request, Response } from 'express';
import ConsultService from '../services/ConsultService';

const ConsultController = async (request: Request, response: Response) => {
  const { query } = request;

  const list = await ConsultService(query);

  return response.json(list);
};

export default ConsultController;
