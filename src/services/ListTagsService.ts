import { getCustomRepository } from 'typeorm';

import { TagsRepository } from '../repositories';

class ListTagsService {
  execute = async () => {
    const tagsRepository = getCustomRepository(TagsRepository);

    const tags = await tagsRepository.find();

    return tags;
  };
}

export default ListTagsService;
