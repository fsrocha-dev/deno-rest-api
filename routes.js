import {  Router } from "https://deno.land/x/oak/mod.ts";

import TaskController from './controllers/TaskController.js'

const router = new Router();

router
  .get('/tasks', TaskController.index)

export default router;