import express, { Application } from 'express';
import { checkConnection, env } from './config';
const app: Application = express();
const port = env.PORT;
app.listen(port, async () => {
    try {
        await checkConnection();
    } catch (error: unknown) {
        console.error(`error: ${error}`);
    } finally {
        console.log(`listning on port: ${port}`);
    }
});
