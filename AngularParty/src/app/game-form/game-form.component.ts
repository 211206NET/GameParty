import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Game } from '../models/game';
import { GameApiService } from '../services/game-api.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  public getRandomInt() {
    return Math.floor(Math.random() * 10000);   
  }
  userid = this.getRandomInt();
  constructor(private gameApi: GameApiService) { }

  game: Game = {
    id: this.userid,
    gameName: '',
    playerCount: 0,
    player: {
      id: 0,
      username: '',
      password: ''
    }
  }

  displayFormSubmitError: boolean = false;

  

  processForm(newGameForm: NgForm){
    console.log("form created", newGameForm, this.game);
    if(newGameForm.form.status == 'VALID')
    {
      this.gameApi.createNewGame(this.game).then((test) =>
      {
        console.log(test);
      })
    }
    else
    {
      this.displayFormSubmitError = true;
    }
  }

  ngOnInit(): void {
  }

}
