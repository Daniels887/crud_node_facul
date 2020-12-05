import { Router } from 'express';
import UserController from './controllers/UserController';

const router = Router();

router.get('/users', UserController.index);
router.post('/new', UserController.store);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.destroy);

export default router;
