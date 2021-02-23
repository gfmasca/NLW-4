import UsersController from 'controllers/UsersController';
import { Router } from 'express';

const router = Router();

const usersController = new UsersController();

router.post('/users', usersController.create);

export default router;
