import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import {io} from "socket.io-client";
@Component({
  selector: 'app-move-game',
  templateUrl: './move-game.component.html',
  styleUrls: ['./move-game.component.css']
})
export class MoveGameComponent implements OnInit {

  @ViewChild("game")
  private gameCanvas!: ElementRef;
  private context: any;
  private socket: any;
  
  position = {
    x: 340,
    y: 250
  };
  
  public YouWon(){
    if(true){}
  }
 public getRandomInt() {
    return Math.floor(Math.random() * 200);
  }
  playeronescore =0;
  playertwoscore =0;
  resetscores(){
  this.playeronescore =0;
  this.playertwoscore =0;
  }
  playerone(){
    this.playeronescore ++;
    
  }
  playertwo(){
    this.playertwoscore ++;
    
  }

  public thirdcube(randomx: any,randomy: any){
    this.context = this.gameCanvas.nativeElement.getContext("2d");
    this.context.fillRect(randomx, randomy, 20, 20);
  }
  public ngOnInit() {
      this.socket = io("http://localhost:3000");
  }


  public MoveCube(data: { x: any; y: any; }){
    this.context = this.gameCanvas.nativeElement.getContext("2d");
    this.context.clearRect(0, 0, this.gameCanvas.nativeElement.width, this.gameCanvas.nativeElement.height);
    this.context.fillRect(data.x, data.y, 20, 20);
  }

  public ngAfterViewInit() {
    this.context = this.gameCanvas.nativeElement.getContext("2d");
    this.socket.on("position", (data: { x: any; y: any; })  => {
    this.MoveCube(data);
    console.log("called in ts ");
    });
  }
  
public move(direction: string) {
this.socket.emit("move", direction);

switch(direction) {
  case "left":
      this.position.x -= 5;
      break;
  
      case "right":
      this.position.x += 5;
      break;
  
      case "up":
      this.position.y -= 5;
      break;
  
      case "down":
      this.position.y += 5;
      break;
      
      case"restart":
      this.position.x =340;
      this.position.y =250;

      
}
this.MoveCube(this.position);
}
}


