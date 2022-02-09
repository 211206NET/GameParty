import { Player } from "./player";

export type AboutPlayer = {
    id: number;
    gameLibrary: string; 
    favoriteGames: string; 
    gamesWon: number; 
    gamesLost: number; 
    player: Player;
}