import { Repository, EntityRepository } from 'typeorm';

import { Compliment } from '../entities';

@EntityRepository(Compliment)
class ComplimentsRepository extends Repository<Compliment> {}

export default ComplimentsRepository;
