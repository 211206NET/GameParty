
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import {io} from "socket.io-client";


const SOCKET_ENDPOINT = 'localhost:3000';
@Component({
  selector: 'app-tic-tac',
  templateUrl: './tic-tac.component.html',
  styleUrls: ['./tic-tac.component.css']
})
export class TicTacComponent implements OnInit {

    @ViewChild("game")
    private gameCanvas!: ElementRef;
    private context: any;
    private socket: any;
    
    position = {
      x: 200,
      y: 200
    };
    
    public YouWon(){
      if(true){}
    }
   public getRandomInt() {
      return Math.floor(Math.random() * 200);
    }

<<<<<<< HEAD
<<<<<<< Updated upstream
=======
=======
>>>>>>> 5bc22aa90b528528a3ec20e5a41f489fee3f05a6
    public randomCube(){
      var randomx= this.getRandomInt();
      var randomy= this.getRandomInt();
      this.context = this.gameCanvas.nativeElement.getContext("2d");
      this.context.fillRect(randomx, randomy, 20, 20);
      return randomx;
      return randomy;
      
    }

    public thirdcube(randomx: any,randomy: any){
      this.context = this.gameCanvas.nativeElement.getContext("2d");
      this.context.fillRect(randomx, randomy, 20, 20);
    }
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> 5bc22aa90b528528a3ec20e5a41f489fee3f05a6
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
        
  }
  this.MoveCube(this.position);
}
}


