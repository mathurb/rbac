import { z } from 'zod';

const envVariables = z.object({
    PORT: z.string(),
    DB: z.string(),
    DB_DIALECT: z.string(),
    DB_USERNAME: z.string(),
    DB_PASSWORD: z.string(),
    DB_HOST: z.string(),
    DB_PORT: z.string(),
});

envVariables.parse(process.env);

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof envVariables> {}
    }
}

export interface EnvVariables extends z.infer<typeof envVariables> {}
