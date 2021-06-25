import { getCustomRepository } from 'typeorm';

import { ComplimentsRepository } from '../repositories';

class ListSentComplimentsService {
  execute = async (user_sender: string) => {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);

    const compliments = await complimentsRepository.find({
      where: {
        user_sender,
      },
      relations: ['userSender', 'userReceiver', 'tag'],
    });

    return compliments;
  };
}

export default ListSentComplimentsService;
