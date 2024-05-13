import { Request, Response } from 'express';
import { Permission } from '../models';
import { IPermission } from '../types';

export const findAllPermission = async (req: Request, res: Response) => {
    const permissionSet = (await Permission.findAll()) as Array<IPermission>;
    return res.status(200).json(permissionSet);
};

export const findOnePermission = async (req: Request, res: Response) => {
    const { id } = req.params;
    const permission = await Permission.findByPk(id);
    return res.status(200).json(permission);
};

export const patchPermission = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { permission } = req.body as { permission: IPermission };
    await Permission.update(permission, { where: { id } });
    return res.status(200);
};

export const postPermission = async (req: Request, res: Response) => {
    const { permission } = req.body as { permission: IPermission };
    await Permission.create(permission);
    return res.status(200);
};

export const deletePermission = async (req: Request, res: Response) => {
    const { id } = req.params;
    const exist = await Permission.findByPk(id);
    if (exist == null) {
        return res.status(400);
    }
    await exist.destroy();
    return res.status(200);
};
