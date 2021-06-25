import { getCustomRepository } from 'typeorm';

import { ComplimentsRepository } from '../repositories';

class ListReceivedComplimentsService {
  execute = async (user_receiver: string) => {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);

    const compliments = await complimentsRepository.find({
      where: {
        user_receiver,
      },
      relations: ['userSender', 'userReceiver', 'tag'],
    });

    return compliments;
  };
}

export default ListReceivedComplimentsService;
