import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { PlayerApiService } from '../services/player-api.service';

@Component({
  selector: 'player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  constructor(private apiService: PlayerApiService) { }

  allPlayer: Player[] = [];

  ngOnInit(): void {
    this.apiService.getAllPlayers().then((playerArray) => 
    {
      this.allPlayer = playerArray;
    })
  }

}
