
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
    

<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes
    public ngOnInit() {
        this.socket = io("http://localhost:3000");
    }

    public ngAfterViewInit() {
      
      this.context = this.gameCanvas.nativeElement.getContext("2d");
      this.socket.on("position", (data: { x: any; y: any; })  => {
          this.context.clearRect(0, 0, this.gameCanvas.nativeElement.width, this.gameCanvas.nativeElement.height);
          this.context.fillRect(data.x, data.y, 20, 20);
      });

    }
public move(direction: string) {
  this.socket.emit("move", direction);
}

}
