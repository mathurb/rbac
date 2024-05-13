import { AllowNull, BelongsTo, Column, DataType, Default, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { IPermission, IRole } from '../types';
import { Role } from './Role';

@Table({ schema: 'Security' })
export class Permission extends Model<IPermission> implements IPermission {
    @PrimaryKey
    @AllowNull(false)
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    public id: string;

    @AllowNull(false)
    @Column(DataType.STRING(25))
    public name: string;

    @BelongsTo(() => Role)
    public role: IRole;
}
