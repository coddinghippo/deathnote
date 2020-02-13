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

app.get(
  "/api/summoner-by-name",
  (req: express.Request, res: express.Response) => {
    getSummonerByName(res, req.query.name);
  }
);

app.listen(PORT, () => {
  console.log(`Server is Running at >>> localhost:${PORT}`);
});

const getSummonerByName = async (
  res: express.Response,
  summonerName: string
) => {
  baseAPI
    .get(`summoner/v4/summoners/by-name/${encodeURI(summonerName)}`)
    .then(resDataFromRiotGames => {
      res.send(resDataFromRiotGames.data);
    });
};
