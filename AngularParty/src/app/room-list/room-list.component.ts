import { Component, OnInit } from '@angular/core';
import { Room } from '../models/room';
import { RoomApiService } from '../services/room-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  
  constructor(private apiService: RoomApiService, private router: Router) { }

  allRoom: Room[] = [];

  gotoroom(){
  this.router.navigate(['rooms'])
}
  ngOnInit(): void {
    this.apiService.getAllRooms().then((roomArray) =>
    {
      this.allRoom = roomArray;
    })
  }

}
