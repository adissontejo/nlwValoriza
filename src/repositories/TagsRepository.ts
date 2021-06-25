import { EntityRepository, Repository } from 'typeorm';

import { Tag } from '../entities';

@EntityRepository(Tag)
class TagsRepository extends Repository<Tag> {}

export default TagsRepository;
