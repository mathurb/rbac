import { Request, Response } from 'express';
import { Role } from '../db/models';
import { IRole } from '../types';

export const findAllRole = async (req: Request, res: Response) => {
    const roleSet = (await Role.findAll()) as Array<IRole>;
    return res.status(200).json(roleSet);
};

export const findOneRole = async (req: Request, res: Response) => {
    const { id } = req.params;
    const role = await Role.findByPk(id);
    return res.status(200).json(role);
};

export const patchRole = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { role } = req.body as { role: IRole };
    await Role.update(role, { where: { id } });
    return res.status(200);
};

export const postRole = async (req: Request, res: Response) => {
    const { role } = req.body as { role: IRole };
    await Role.create(role);
    return res.status(200);
};

export const deleteRole = async (req: Request, res: Response) => {
    const { id } = req.params;
    const exist = await Role.findByPk(id);
    if (exist == null) {
        return res.status(400);
    }
    await exist.destroy();
    return res.status(200);
};
