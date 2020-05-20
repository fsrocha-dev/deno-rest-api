import db from '../database/mysql.js'

class Task {
  find() {
    return db.query(`SELECT * FROM tasks;`);
  }
}

export default new Task();