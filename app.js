import { Application } from "https://deno.land/x/oak/mod.ts";

import router from './routes.js';
import './database/mysql.js';

const env = Deno.env.toObject();
const PORT = 7000;
const HOST = env.HOST || '127.0.0.1';

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listering on port: ${PORT}...`);

await app.listen(`${HOST}:${PORT}`);