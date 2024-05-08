export interface IUser {
    id: number;
    email: string;
    username: string;
    password: string;
    roleId: number;
    updatedOn: Date | string;
    createdOn: Date | string;
}
