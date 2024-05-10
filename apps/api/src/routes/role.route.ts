import { Router } from 'express';
import { deleteRole, findAllRole, findOneRole, patchRole, postRole } from '../controller';

export const roleRouter: Router = Router();

roleRouter.get(`/roleSet`, findAllRole);

roleRouter.get(`/role/:id`, findOneRole);

roleRouter.patch('/role/:id', patchRole);

roleRouter.post('/role', postRole);

roleRouter.delete('/role/:id', deleteRole);
