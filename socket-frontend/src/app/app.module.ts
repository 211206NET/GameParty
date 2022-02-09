import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { AppComponent } from './app.component';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { AboutPlayerComponent } from './Profile/about-player.component';
import { environment } from 'src/environments/environment';
import { WelcomeComponent } from './welcome/welcome.component';
import { TicTacComponent } from './tic-tac/tic-tac.component';
import { RockPaperScissorsComponent } from './rock-paper-scissors/rock-paper-scissors.component';
import { ChatPageComponent } from './chat-page/chat-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatInboxComponent,
    AuthComponent,
    NavComponent,
    AboutPlayerComponent,
    WelcomeComponent,
    TicTacComponent,
    RockPaperScissorsComponent,
    ChatPageComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
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
