import { Request, Response } from 'express';
import { User } from '../db/models';
import { IUser } from '../types';

export const findAllUser = async (req: Request, res: Response) => {
    const userSet = (await User.findAll()) as Array<IUser>;
    return res.status(200).json(userSet);
};

export const findOneUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    return res.status(200).json(user);
};

export const patchUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { user } = req.body as { user: IUser };
    await User.update(user, { where: { id } });
    return res.status(200);
};

export const postUser = async (req: Request, res: Response) => {
    const { user } = req.body as { user: IUser };
    await User.create(user);
    return res.status(200);
};

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const exist = await User.findByPk(id);
    if (exist == null) {
        return res.status(400);
    }
    await exist.destroy();
    return res.status(200);
};
