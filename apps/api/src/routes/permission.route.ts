import { Router } from 'express';
import { deletePermission, findAllPermission, findOnePermission, patchPermission, postPermission } from '../controller';

export const permissionRouter: Router = Router();

permissionRouter.get(`/permissionSet`, findAllPermission);

permissionRouter.get(`/permission/:id`, findOnePermission);

permissionRouter.patch('/permission/:id', patchPermission);

permissionRouter.post('/permission', postPermission);

permissionRouter.delete('/permission/:id', deletePermission);
