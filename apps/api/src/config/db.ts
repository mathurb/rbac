import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize';
import { env } from './config';

export const db = new Sequelize({
    database: env.DB,
    dialect: env.DB_DIALECT as Dialect,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    host: env.DB_HOST,
    port: parseInt(env.DB_PORT),
    pool: {
        max: 5,
        min: 0,
        idle: 30000,
        acquire: 600000,
    },
});

export const checkConnection = async () => {
    try {
        await db.authenticate();
        await db.sync({ force: true });
        console.log(`connection to db Successful`);
    } catch (error: unknown) {
        console.error(`Error:${error}`);
    }
};
