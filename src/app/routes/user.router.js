import { Router } from 'express';
import UserController from '../controllers/user.controller'

const router = Router();

router.get('/', UserController.getListUsers);
router.get('/:id', UserController.getUser);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUSer);
router.delete('/:id', UserController.deleteUser);

export default router;