import { Component, OnInit } from '@angular/core';
import { Room } from '../models/room';
import { RoomApiService } from '../services/room-api.service';

@Component({
  selector: 'room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  constructor(private apiService: RoomApiService) { }

  allRoom: Room[] = [];

  ngOnInit(): void {
    this.apiService.getAllRooms().then((roomArray) =>
    {
      this.allRoom = roomArray;
    })
  }

}
