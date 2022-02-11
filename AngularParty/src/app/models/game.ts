import { Player } from "./player";

export type Game = {
    id: number;
    gameName: string;
    playerCount: number;
    player: Player;
}