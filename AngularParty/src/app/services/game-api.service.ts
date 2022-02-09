import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameApiService {

  constructor(private http: HttpClient) {}

  getAllGames(): Promise<Game[]>
  {
    return firstValueFrom(this.http.get<Game[]>("http://rrwebparty-prod.us-east-1.elasticbeanstalk.com/api/game"))
  }
  createNewGame(game: Game)
  {
    return firstValueFrom(this.http.post("http://rrwebparty-prod.us-east-1.elasticbeanstalk.com/api/game", game))
  }
}
