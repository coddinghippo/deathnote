import axios from 'axios';

// let a = "/lol/summoner/v4/summoners/by-name/{summonerName}";
const BASE_URL = "http://localhost:4000";

const baseAPI = axios.create({
  baseURL: BASE_URL
  // headers: {
  //   "X-Riot-Token": process.env.REACT_APP_API_KEY
  // }
});

export const api = {
  getSummonerByName: async (summonerName: string) => {
    console.log(summonerName);
    const res = await baseAPI.get(`/api/summoner-by-name?name=${summonerName}`);
    return res.data;
  },
  getLeagueByEncryptedId: async(encryptedId: string) => {
    console.log(encryptedId);
    const result = await baseAPI.get(`/api/league-by-encrypted-id?id=${encryptedId}`);
    return result.data;
  }

};

