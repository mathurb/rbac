import dotenv from 'dotenv';
dotenv.config();
import { EnvVariables } from './env';

export const env: EnvVariables = {
    PORT: process.env.PORT,
    DB: process.env.DB,
    DB_DIALECT: process.env.DB_DIALECT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
};
