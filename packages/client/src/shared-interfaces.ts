export interface ISummoner {
  profileIconId: number;
  name: string;
  puuid: string;
  summonerLevel: number;
  accountId: string;
  id: string;
  revisionDate: number;
}

export interface ILeague{
  queueType: string;
  summonerName: string;
  hotStreak: boolean;
  wins: number;
  veteran: boolean;
  losses: number;
  rank: string;
  tier: string;
  inactive: boolean;
  freshBlood: boolean;
  leagueId: string;
  summonerId: string;
  leaguePoints: number;
}