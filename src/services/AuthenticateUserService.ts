import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import UsersRepositories from '../repositories/UsersRepositories';

type Params = {
  email: string;
  password: string;
};

class AuthenticateUserService {
  execute = async ({ email, password }: Params) => {
    const userRepository = getCustomRepository(UsersRepositories);

    const user = await userRepository.findOne({ email });

    if (!user) {
      throw new Error('Email/Password incorrect');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Email/Password incorrect');
    }

    const token = sign({ email }, 'c8b67ce639db01901ae4576ad3058f41', {
      subject: user.id,
      expiresIn: '1d',
    });

    return token;
  };
}

export default AuthenticateUserService;
