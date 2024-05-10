import {
    AllowNull,
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
import { IRole, IUser } from '../../types';
import { Role } from './Role';

@Table({ schema: 'dbo', timestamps: true })
export class User extends Model<IUser> implements IUser {
    @PrimaryKey
    @AllowNull(false)
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    public id: string;

    @AllowNull(false)
    @Column(DataType.STRING(50))
    public email: string;

    @AllowNull(false)
    @Column(DataType.STRING(25))
    public username: string;

    @AllowNull(false)
    @Column(DataType.STRING(25))
    public password: string;

    @ForeignKey(() => Role)
    @AllowNull(false)
    @Column(DataType.UUID)
    public roleId: string;

    @UpdatedAt
    @AllowNull(false)
    @Column(DataType.DATE)
    public updatedOn: Date | string;

    @CreatedAt
    @AllowNull(false)
    @Column(DataType.DATE)
    public createdOn: Date | string;

    @HasMany(() => Role, 'roleId')
    public permissionSet: Array<IRole>;
}
