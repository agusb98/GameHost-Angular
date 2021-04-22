import { Component, OnInit } from '@angular/core';
import { Score } from 'src/app/models/score';
import { PiedraPapelTijeraService } from 'src/app/services/games/piedra-papel-tijera.service';

@Component({
  selector: 'app-piedra-papelo-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent {
  pointsUser: number = 0;
  pointsPC: number = 0;
  statusGame: string = '';
  resultGame: string = 'juegas primero...';
  newScore: Score = new Score();
  list = this.gameService.getAll().valueChanges();

  constructor(
    private gameService: PiedraPapelTijeraService,
    ) { 
      this.newScore.game = 'piedra-papel-tijera';
      this.newScore.user = 'agusb98';
    }

  play(actionUser: string) {        
    const actionPC = this.playPC();
    this.statusGame = 'You: ' + actionUser + ' vs ' + 'PC: ' + actionPC;
    this.winner(actionPC + actionUser);
    //this.saveScore();
    localStorage.setItem('scores', JSON.stringify(this.newScore));
  }

  playPC() {
    const action = ['Roca', 'Papel', 'Tijera'];
    const random = Math.floor(Math.random() * 3);
    return action[random];
  }

  winner(result: string) {
    switch (result) {
      //Win
      case 'PapelRoca':
      case 'TijeraPapel':
      case 'RocaTijera':
        {
          this.resultGame = "You Win";
          this.pointsUser += 1;
          this.newScore.score += 10;
        }
        break;
      //Loss
      case 'PapelTijera':
      case 'TijeraRoca':
      case 'RocaPapel':
        {
          this.resultGame = "PC win";
          this.pointsPC += 1;
          this.newScore.score -= 5;
        }
        break;
      //Draw
      case 'PapelPapel':
      case 'TijeraTijera':
      case 'RocaRoca':
        {
          this.resultGame = "Nobody win";
          this.newScore.score += 1;
        }
        break;
    }
  }

  /**
   * Save score of user vs PC in database firebase
   */
  saveScore() {
    this.gameService.addScore(this.newScore);
  }
}