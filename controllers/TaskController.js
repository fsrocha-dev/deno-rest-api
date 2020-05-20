import Task from '../models/Task.js'

class TaskController {
  async index({ response }) {
    const tasks = await Task.find();

    response.body = tasks.rows;
  }
}

export default new TaskController();