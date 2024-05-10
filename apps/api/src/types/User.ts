export interface IUser {
    id: string;
    email: string;
    username: string;
    password: string;
    roleId: string;
    updatedOn: Date | string;
    createdOn: Date | string;
}
