import { getCustomRepository } from 'typeorm';
import { classToPlain } from 'class-transformer';

import { UsersRepository } from '../repositories';

class ListUsersService {
  execute = async () => {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = await usersRepository.find();

    return classToPlain(users);
  };
}

export default ListUsersService;
