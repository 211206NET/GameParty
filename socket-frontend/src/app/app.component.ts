import { Component, ViewChild,ElementRef,OnInit } from '@angular/core';
import io from "socket.io-client";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
    
  @ViewChild("game")
  private gameCanvas!: ElementRef;

  public ngOnInit() {
      
  }

  public ngAfterViewInit() {
  }
 

}