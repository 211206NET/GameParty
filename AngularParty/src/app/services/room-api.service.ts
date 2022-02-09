import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, firstValueFrom } from 'rxjs';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomApiService {

  constructor(private http: HttpClient) { }

  getAllRooms(): Promise<Room[]>
  {
    return firstValueFrom(this.http.get<Room[]>("http://rrwebparty-prod.us-east-1.elasticbeanstalk.com/api/room"))
  }
  createNewRoom(room: Room)
  {
    return firstValueFrom(this.http.post("http://rrwebparty-prod.us-east-1.elasticbeanstalk.com/api/room", room))
  }
}
