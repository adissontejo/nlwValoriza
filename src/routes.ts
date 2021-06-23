import { Router } from 'express';

import { UserController, TagController } from './controllers';
import ensureAdmin from './middlewares/ensureAdmin';

const router = Router();

const userController = new UserController();
const tagController = new TagController();

router.post('/users', userController.handle);
router.post('/tags', ensureAdmin, tagController.handle);

export { router };
