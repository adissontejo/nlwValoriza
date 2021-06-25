import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { UsersRepository } from '../repositories';

type Params = {
  email: string;
  password: string;
};

class AuthenticateUserService {
  execute = async ({ email, password }: Params) => {
    const userRepository = getCustomRepository(UsersRepository);

    const user = await userRepository.findOne({ email });

    if (!user) {
      throw new Error('Email/Password incorrect');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Email/Password incorrect');
    }

    const token = sign({ email }, process.env.PRIVATE_KEY, {
      subject: user.id,
      expiresIn: '1d',
    });

    return token;
  };
}

export default AuthenticateUserService;
