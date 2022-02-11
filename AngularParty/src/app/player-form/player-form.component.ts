import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Player } from '../models/player';
import { PlayerApiService } from '../services/player-api.service';


@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  public getRandomInt() {
    return Math.floor(Math.random() * 10000);   
  }
  userid = this.getRandomInt();
  constructor(private playerApi: PlayerApiService ) { }

  

  player: Player = {
    username: '',
    password: '',
    id: this.userid
  };

  displayFormSubmitError: boolean = false;


  processForm(newPlayerForm: NgForm){
    console.log("form created", newPlayerForm, this.player);
    if(newPlayerForm.form.status == 'VALID')
    {
      this.playerApi.createNewPlayer(this.player).then((test) =>
      {
        console.log(test);
      }, (err: any) => console.log(err))
    }
    else
    {
      this.displayFormSubmitError = true;
    }
  }
  ngOnInit(): void {
  }

}
