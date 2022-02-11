import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rockpaperscissors',
  templateUrl: './rockpaperscissors.component.html',
  styleUrls: ['./rockpaperscissors.component.css']
})
export class RockpaperscissorsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  userScore = 0;
  compScore = 0;
  userSelected!: string;
  compSelected!: string;
  action!: string;
  status!: string;
  compWeapons = [
    'rock',
    'paper',
    'scissors'
  ];

  userPick(userWeapon: string): void {
    this.userSelected = userWeapon;
    console.log( this.userSelected);
    setTimeout( () => {
      const randomNum = Math.floor(Math.random() * 3);
      this.compSelected = this.compWeapons[randomNum];
      console.log(this.compSelected);
      this.checkResult();
    }, 1000);
  }

  clearField() {
    setTimeout(() => {
      this.status = '';
      this.userSelected = '';
      this.compSelected = '';
    }, 2000);
  }

  win(user: string, comp: string) {
    this.userScore ++;
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'beats';
    this.status = '. You win!';
    this.clearField();
  }


  lose(user: string, comp: string) {
    this.compScore ++;
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'loses to';
    this.status = '. You lose!';
    this.clearField();
  }

  draw(user: string, comp: string) {
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'and';
    this.status = '. You draw!';
    this.clearField();
  }

  checkResult() {
    const userChoice = this.userSelected;
    const compChoice = this.compSelected;
    switch (userChoice + compChoice) {
      case 'rockscissors':
      case 'paperrock':
      case 'scissorspaper':
        this.win(userChoice, compChoice);
        break;
      case 'rockpaper':
      case 'scissorsrock':
      case 'paperscissors':
        this.lose(userChoice, compChoice);
        break;
      default:
        this.draw(userChoice, compChoice);
        break;
    }

  }
}