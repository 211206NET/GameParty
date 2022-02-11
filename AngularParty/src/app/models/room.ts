import { Player } from "./player"

export type Room = {
    id: number;
    roomName: string;
    roomCode: number;
    playerCount: number;
    players: Player[];
}