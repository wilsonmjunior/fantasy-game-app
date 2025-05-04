import { Player } from "./Player";

export interface Team {
    id: string;
    name: string;
    shield: string;
    totalRating: number;
    players: Player[];
}
