import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import { UsersRepository } from '../repositories';

type Params = {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
};

class UserService {
  execute = async ({ name, email, admin, password }: Params) => {
    const usersRepository = getCustomRepository(UsersRepository);

    if (!email) {
      throw new Error('Email incorrect');
    }

    const userAlreadyExists = await usersRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const passwordHash = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    });

    await usersRepository.save(user);

    return user;
  };
}

export default UserService;
