import { Router } from 'express';

import {
  UserController,
  TagController,
  AuthenticateUserController,
  ComplimentController,
} from './controllers';
import ensureAdmin from './middlewares/ensureAdmin';

const router = Router();

const userController = new UserController();
const tagController = new TagController();
const authenticateUserController = new AuthenticateUserController();
const complimentController = new ComplimentController();

router.post('/users', userController.handle);
router.post('/tags', ensureAdmin, tagController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/compliments', complimentController.handle);

export default router;
