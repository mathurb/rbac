import { Router } from 'express';
import { deleteUser, findAllUser, findOneUser, patchUser, postUser } from '../controller';

export const userRouter: Router = Router();

userRouter.get(`/userSet`, findAllUser);

userRouter.get(`/user/:id`, findOneUser);

userRouter.patch('/user/:id', patchUser);

userRouter.post('/user', postUser);

userRouter.delete('/user/:id', deleteUser);
