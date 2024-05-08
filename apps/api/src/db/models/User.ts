import {
    AutoIncrement,
    Column,
    CreatedAt,
    DataType,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
    UpdatedAt,
} from 'sequelize-typescript';
import { IUser } from '../../types';
import { Role } from './Role';

@Table({ schema: 'dbo', timestamps: true })
export class User extends Model<IUser> implements IUser {
    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER, allowNull: false })
    public id: number;

    @Column({ type: DataType.STRING(50), allowNull: false })
    public email: string;

    @Column({ type: DataType.STRING(25), allowNull: false })
    public username: string;

    @Column({ type: DataType.STRING(25), allowNull: false })
    public password: string;

    @ForeignKey(() => Role)
    @Column({ type: DataType.INTEGER, allowNull: false })
    public roleId: number;

    @UpdatedAt
    @Column({ type: DataType.DATE })
    public updatedOn: Date | string;

    @CreatedAt
    @Column({ type: DataType.DATE })
    public createdOn: Date | string;
}
