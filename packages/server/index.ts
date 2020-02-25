import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

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

// Configure CORS
app.use(
  cors({
    origin: "http://localhost:3000"
  })
);

app.get("/", (req: express.Request, res: express.Response) => res.send(`TOKEN: ${TOKEN}`))

app.get(
  "/api/summoner-by-name",
  (req: express.Request, res: express.Response) => {
    getSummonerByName(res, req.query.name);
  }
);

app.get(  //rank 정보를 얻기위함.
  "/api/league-by-encrypted-id",
  (req:express.Request , res:express.Response) => {
   getLeagueByEncryptedId(res,req.query.id); 
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
    }).catch(console.log);
};

const getLeagueByEncryptedId = async(
  res:express.Response,
  encryptedId: string
) => {
  baseAPI
    .get(`league/v4/entries/by-summoner/${encryptedId}`)
    .then(resDataFromRiotGames => {
      res.send(resDataFromRiotGames.data);
    }).catch(console.log);
};
