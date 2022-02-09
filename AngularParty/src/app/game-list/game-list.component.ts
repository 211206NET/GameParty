import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { GameApiService } from '../services/game-api.service';

@Component({
  selector: 'game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

    
  constructor(private apiService: GameApiService) { }

  allGame: Game[] = [];

  ngOnInit(): void {
    this.apiService.getAllGames().then((gameArray) =>
    {
      this.allGame = gameArray;
    })
  }

}
