import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ChatInboxComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
