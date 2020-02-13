import express from "express";
import axios from "axios";
import dotenv from "dotenv";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      PORT?: string;
    }
  }
}

// configurations
dotenv.config();

const BASE_URL = "https://kr.api.riotgames.com/lol/";
const TOKEN = process.env["RIOT_API_KEY"];

const baseAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-Riot-Token": TOKEN
  }
});

class App {
  public application: express.Application;
  constructor() {
    this.application = express();
  }
}

const app = new App().application;
const PORT = process.env.PORT || 4000;

app.get("/", (req: express.Request, res: express.Response) => {
  let summonerName = "상산조자룡이다";
  baseAPI
    .get(`summoner/v4/summoners/by-name/${encodeURI(summonerName)}`)
    .then(data => {
      console.log(data);
      res.send("Success");
    });
});

app.listen(PORT, () => {
  console.log(`Server is Running at >>> localhost:${PORT}`);
});
