import { Client } from "https://deno.land/x/mysql/mod.ts";

class DB {
  constructor() {
    this.connect();
  }
  async connect() {
    this.client = new Client({
      hostname: "127.0.0.1",
      username: "admin",
      db: "deno",
      poolSize: 3, // Limite connection
      password: "admin",
    });

    await this.client.connect();
  }
}

export default new DB().client;