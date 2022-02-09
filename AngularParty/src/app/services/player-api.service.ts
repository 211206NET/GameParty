import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerApiService {

  constructor(private http: HttpClient) {}

  

  getAllPlayers(): Promise<Player[]>
  {
    return firstValueFrom(this.http.get<Player[]>("http://rrwebparty-prod.us-east-1.elasticbeanstalk.com/api/player"))
  }
  createNewPlayer(player: Player)
  {
    return firstValueFrom(this.http.post("http://rrwebparty-prod.us-east-1.elasticbeanstalk.com/api/player", player))
  }
}
