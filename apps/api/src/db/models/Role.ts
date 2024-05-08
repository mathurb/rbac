import {
    AutoIncrement,
    Column,
    CreatedAt,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    PrimaryKey,
    Table,
    UpdatedAt,
} from 'sequelize-typescript';
import { IPermission, IRole } from '../../types';
import { Permission } from './Permission';

@Table({ schema: 'Security', timestamps: true })
export class Role extends Model<IRole> implements IRole {
    @AutoIncrement
    @PrimaryKey
    @Column({ type: DataType.INTEGER })
    public id: number;

    @Column({ type: DataType.STRING(25) })
    public name: string;

    @ForeignKey(() => Permission)
    @Column({ type: DataType.INTEGER })
    public permissionId: number;

    @UpdatedAt
    @Column({ type: DataType.DATE })
    public updatedOn: string | Date;

    @CreatedAt
    @Column({ type: DataType.DATE })
    public createdOn: string | Date;

    @HasMany(() => Permission, 'permissionId')
    public permissionSet: Array<IPermission>;
}
