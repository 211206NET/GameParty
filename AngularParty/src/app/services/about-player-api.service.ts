import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { AboutPlayer } from '../models/aboutplayer';

@Injectable({
  providedIn: 'root'
})
export class AboutPlayerApiService {

  constructor(private http: HttpClient) { }

  getAllAboutPlayers(): Promise<AboutPlayer[]>
  {
    return firstValueFrom(this.http.get<AboutPlayer[]>("http://rrwebparty-prod.us-east-1.elasticbeanstalk.com/api/aboutplayer"))
  }
  createNewAboutPlayer(aboutplayer: AboutPlayer)
  {
    return firstValueFrom(this.http.post("http://rrwebparty-prod.us-east-1.elasticbeanstalk.com/api/aboutplayer", aboutplayer))
  }
  
}
