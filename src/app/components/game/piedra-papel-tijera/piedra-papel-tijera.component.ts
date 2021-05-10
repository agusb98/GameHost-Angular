import { Component, OnInit } from '@angular/core';
import { Score } from 'src/app/models/score';
import { ScoreService } from 'src/app/services/score.service';

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

  constructor(private scoreService: ScoreService) {
    this.newScore.user = localStorage.getItem('email');
    this.newScore.game = 'piedraPapelTijera';
  }

  play(actionUser: string) {
    const actionPC = this.playPC();
    this.statusGame = 'You: ' + actionUser + ' vs ' + 'PC: ' + actionPC;
    this.winner(actionUser + actionPC);
    
    this.scoreService.add(this.newScore, 'scores-piedraPapelTijera');
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
          this.newScore.score = 10;
          this.newScore.wons = 1;
        }
        break;
      //Loss
      case 'PapelTijera':
      case 'TijeraRoca':
      case 'RocaPapel':
        {
          this.resultGame = "PC win";
          this.pointsPC += 1;
          this.newScore.score = 5;
          this.newScore.losses = 1;
        }
        break;
      //Draw
      case 'PapelPapel':
      case 'TijeraTijera':
      case 'RocaRoca':
        {
          this.resultGame = "Nobody win";
          this.newScore.score = 1;
          this.newScore.ties = 1;
        }
        break;
    }
  }
}