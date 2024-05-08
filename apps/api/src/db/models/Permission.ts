import { AutoIncrement, BelongsTo, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { IPermission, IRole } from '../../types';
import { Role } from './Role';

@Table({ schema: 'Security' })
export class Permission extends Model<IPermission> implements IPermission {
    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER, allowNull: false })
    public id: number;

    @Column({ type: DataType.STRING(25), allowNull: false })
    public name: string;

    @BelongsTo(() => Role)
    public role: IRole;
}
