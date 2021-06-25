import { getCustomRepository } from 'typeorm';

import { ComplimentsRepository, UsersRepository } from '../repositories';

type Props = {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
};

class ComplimentService {
  execute = async ({ tag_id, user_sender, user_receiver, message }: Props) => {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);

    const usersRepository = getCustomRepository(UsersRepository);

    if (user_sender === user_receiver) {
      throw new Error('Incorrect User Receiver');
    }

    const userReceiverExists = await usersRepository.findOne(user_receiver);

    if (!userReceiverExists) {
      throw new Error('User receiver does not exist.');
    }

    const compliment = complimentsRepository.create({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });

    complimentsRepository.save(compliment);

    return compliment;
  };
}

export default ComplimentService;
