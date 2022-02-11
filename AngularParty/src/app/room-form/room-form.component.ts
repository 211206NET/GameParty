import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Room } from '../models/room';
import { RoomApiService } from '../services/room-api.service';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})


export class RoomFormComponent implements OnInit {

  public getRandomInt() {
    return Math.floor(Math.random() * 10000);   
  }
  userid = this.getRandomInt();
  constructor(private roomApi: RoomApiService) { }

  room: Room = {
    id: this.userid,
    roomName: '',
    roomCode: 0,
    playerCount: 0,
    players: []
  }

  displayFormSubmitError: boolean = false;
  

  processForm(newRoomForm: NgForm){
    console.log("form created", newRoomForm, this.room);
    if(newRoomForm.form.status == 'VALID')
    {
      this.roomApi.createNewRoom(this.room).then((test) =>
      {
        console.log(test);
      })
    }
    else
    {
      this.displayFormSubmitError = true;
    }
  }

  ngOnInit(): void {
  }

}
