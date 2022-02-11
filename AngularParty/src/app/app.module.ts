import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { RoomListComponent } from './room-list/room-list.component';
import { AboutplayerListComponent } from './aboutplayer-list/aboutplayer-list.component';
import { GameListComponent } from './game-list/game-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerFormComponent } from './player-form/player-form.component';
import { AboutPlayerFormComponent } from './about-player-form/about-player-form.component';
import { RoomFormComponent } from './room-form/room-form.component';
import { GameFormComponent } from './game-form/game-form.component';
import { FormsModule } from '@angular/forms';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { RockpaperscissorsComponent } from './rockpaperscissors/rockpaperscissors.component';
import { MoveGameComponent } from './move-game/move-game.component';
import { AuthComponent } from './auth/auth.component';
import { WelcomeComponent } from './welcome/welcome.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    RoomListComponent,
    AboutplayerListComponent,   
    GameListComponent,
    NavbarComponent,
    PlayerFormComponent,
    AboutPlayerFormComponent,
    RoomFormComponent,
    GameFormComponent,
    ChatroomComponent,
    RockpaperscissorsComponent,
    MoveGameComponent,
    AuthComponent,
    WelcomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule.forRoot({
      domain: "dev-1vie2d7y.us.auth0.com",
      clientId: "sXhDTr2lD2g95P2UwHH0zDsZPVhFSZW0"
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
