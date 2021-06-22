import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositeries';

type Params = {
  name: string;
  email: string;
  admin?: boolean;
};

const UserService = async ({ name, email, admin }: Params) => {
  const usersRepository = getCustomRepository(UsersRepositories);

  if (!email) {
    throw new Error('Email incorrect');
  }

  const userAlreadyExists = await usersRepository.findOne({
    email,
  });

  if (userAlreadyExists) {
    throw new Error('User already exists');
  }

  const user = usersRepository.create({
    name,
    email,
    admin,
  });

  await usersRepository.save(user);

  return user;
};

export default UserService;
