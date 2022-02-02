import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
const SOCKET_ENDPOINT = 'localhost:3000';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  socket;
  constructor() { }
  ngOnInit() {
    this.setupSocketConnection();
  }
  setupSocketConnection() {
    this.socket = io(SOCKET_ENDPOINT);
 }

}

 SetupSocketConnection(){
  this.socket = io(SOCKET_ENDPOINT);
}
