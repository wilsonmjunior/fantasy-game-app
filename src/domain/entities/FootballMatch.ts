/** Base types */
export interface TeamInfo {
    /** Team’s display name */
    name: string;
    /** Path or URL to the team logo */
    logo: string;
    /** Current score */ 
    score: number;
}
  
export interface MatchStatus {
    /** `true` if the match is in progress */
    isLive: boolean;
    /** Period description – e.g. “1º Tempo”, “Half‑time”, “FT” */
    period: string;
    /** Minute of play (regular time) */
    minute: number;
    /** Extra/added time (optional).  
     *  0 or omit when not applicable. */
    additionalTime?: number;
}
  
export interface CompetitionInfo {
    name: string;
    logo: string;
}
  
export interface ScorerInfo {
    player: string;
    /** Team the scorer belongs to */
    team: string;
    /** Minute in which the goal was scored (regular time) */
    minute: number;
    /** `true` if the goal was an own goal */
    isOwnGoal: boolean;
    /** `true` if the goal was a penalty */
    isPenalty: boolean;
}
  
  /** Root object */
export interface FootballMatch {
    id: string;
    homeTeam: TeamInfo;
    awayTeam: TeamInfo;
    status: MatchStatus;
    competition: CompetitionInfo;
    stadium: string;
    /** ISO‑8601 date‑time string or Date instance */
    date: string | Date;
    scorers: ScorerInfo[];
  }
  