import { Router } from 'express';

import {
  AuthenticateUserController,
  CreateComplimentController,
  CreateTagController,
  CreateUserController,
  ListReceivedComplimentsController,
  ListSentComplimentsController,
  ListTagsController,
  ListUsersController,
} from './controllers';
import { ensureAdmin, ensureAuthenticated } from './middlewares';

const router = Router();

const authenticateUser = new AuthenticateUserController();
const createCompliment = new CreateComplimentController();
const createTag = new CreateTagController();
const createUser = new CreateUserController();
const listReceivedCompliments = new ListReceivedComplimentsController();
const listSentCompliments = new ListSentComplimentsController();
const listTags = new ListTagsController();
const listUsers = new ListUsersController();

router.post('/login', authenticateUser.handle);

router.post('/compliments', ensureAuthenticated, createCompliment.handle);

router.post('/tags', ensureAuthenticated, ensureAdmin, createTag.handle);

router.post('/users', createUser.handle);

router.get(
  '/users/compliments/received',
  ensureAuthenticated,
  listReceivedCompliments.handle
);

router.get(
  '/users/compliments/sent',
  ensureAuthenticated,
  listSentCompliments.handle
);

router.get('/tags', listTags.handle);

router.get('/users', listUsers.handle);

export default router;
