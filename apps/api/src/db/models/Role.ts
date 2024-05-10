import {
    AllowNull,
    BelongsTo,
    Column,
    CreatedAt,
    DataType,
    Default,
    ForeignKey,
    HasMany,
    Model,
    PrimaryKey,
    Table,
    UpdatedAt,
} from 'sequelize-typescript';
import { IPermission, IRole, IUser } from '../../types';
import { Permission } from './Permission';
import { User } from './User';

@Table({ schema: 'Security', timestamps: true })
export class Role extends Model<IRole> implements IRole {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @AllowNull(false)
    @Column(DataType.UUID)
    public id: string;

    @AllowNull(false)
    @Column(DataType.STRING(25))
    public name: string;

    @ForeignKey(() => Permission)
    @AllowNull(false)
    @Column(DataType.UUID)
    public permissionId: string;

    @UpdatedAt
    @AllowNull(false)
    @Column(DataType.DATE)
    public updatedOn: string | Date;

    @CreatedAt
    @AllowNull(false)
    @Column(DataType.DATE)
    public createdOn: string | Date;

    @BelongsTo(() => User)
    public user: IUser;

    @HasMany(() => Permission, 'permissionId')
    public permissionSet: Array<IPermission>;
}
