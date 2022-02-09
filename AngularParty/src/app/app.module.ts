import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    GameFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
