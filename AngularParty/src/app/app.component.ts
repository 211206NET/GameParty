import { Component, ViewChild,ElementRef,OnInit  } from '@angular/core';
import io from "socket.io-client";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularParty';
  
  @ViewChild("game")
  private gameCanvas!: ElementRef;

  public ngOnInit() {
      
  }

  public ngAfterViewInit() {
  }
 

}