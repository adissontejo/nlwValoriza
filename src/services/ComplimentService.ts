import { getCustomRepository } from 'typeorm';

import ComplimentsRepositories from '../repositories/ComplimentsRepositories';
import UsersRepositories from '../repositories/UsersRepositories';

type Props = {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
};

class ComplimentService {
  execute = async ({ tag_id, user_sender, user_receiver, message }: Props) => {
    const complimentsRepositories = getCustomRepository(
      ComplimentsRepositories
    );

    const usersRepositories = getCustomRepository(UsersRepositories);

    if (user_sender === user_receiver) {
      throw new Error('Incorrect User Receiver');
    }

    const userReceiverExists = await usersRepositories.findOne(user_receiver);

    if (!userReceiverExists) {
      throw new Error('User receiver does not exist.');
    }

    const compliment = complimentsRepositories.create({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });

    complimentsRepositories.save(compliment);

    return compliment;
  };
}

export default ComplimentService;