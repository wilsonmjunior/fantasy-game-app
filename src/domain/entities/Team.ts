import { Player } from "./Player";

export interface Team {
    id: string;
    name: string;
    shield: string;
    roundPoints: number;
    players: Player[];
}
