import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositeries';

type Params = {
  id?: string;
  name?: string;
  email?: string;
  admin?: boolean;
  created_at?: string;
  updated_at?: string;
};

const ConsultService = async (query: Params) => {
  const usersRepository = getCustomRepository(UsersRepositories);
  return usersRepository.find(query);
};

export default ConsultService;
