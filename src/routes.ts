import { Router } from 'express';
import ConsultController from './controllers/ConsultController';
import UserController from './controllers/UserController';

const router = Router();

router.post('/users', UserController);
router.get('/consult', ConsultController);

export { router };
