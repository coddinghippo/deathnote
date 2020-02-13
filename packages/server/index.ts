import express from "express";
import console = require("console");

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      PORT?: string;
    }
  }
}

class App {
  public application: express.Application;
  constructor() {
    this.application = express();
  }
}

const app = new App().application;
const PORT = process.env.PORT || 4000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Successfully started");
});

app.listen(PORT, () =>
  console.log(`Server is Running at >>> localhost:${PORT}`)
);
