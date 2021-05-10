import { Component, OnInit } from '@angular/core';
import { Score } from 'src/app/models/score';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  public email: any;
  public gameName = 'PIEDRA-PAPEL-TIJERA';
  resultado: string = 'Su turno';

  puntosUser = 0;
  puntoPC = 0;

  ///game
  board: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  table: HTMLElement[] = [];

  symbol: number = -1;
  gameRunning: boolean = true;

  //Score
  score: Score = new Score();

  constructor(
    private scoreService: ScoreService
  ) { }

  ngOnInit(): void {
    this.score.user = localStorage.getItem('email');
    this.score.game = 'ticTacToe';
    
    this.play();
  }

  play(){
    let cell11: HTMLElement = <HTMLElement>document.getElementById("cell11");
    let cell12: HTMLElement = <HTMLElement>document.getElementById("cell12");
    let cell13: HTMLElement = <HTMLElement>document.getElementById("cell13");
    let cell21: HTMLElement = <HTMLElement>document.getElementById("cell21");
    let cell22: HTMLElement = <HTMLElement>document.getElementById("cell22");
    let cell23: HTMLElement = <HTMLElement>document.getElementById("cell23");
    let cell31: HTMLElement = <HTMLElement>document.getElementById("cell31");
    let cell32: HTMLElement = <HTMLElement>document.getElementById("cell32");
    let cell33: HTMLElement = <HTMLElement>document.getElementById("cell33");
    let reset: HTMLButtonElement = <HTMLButtonElement>document.getElementById("reset");

    this.game([cell11, cell12, cell13, cell21, cell22, cell23, cell31, cell32, cell33]);

    cell11.onclick = (e) => { this.clickCell(1, 1); }
    cell12.onclick = (e) => { this.clickCell(1, 2); }
    cell13.onclick = (e) => { this.clickCell(1, 3); }
    cell21.onclick = (e) => { this.clickCell(2, 1); }
    cell22.onclick = (e) => { this.clickCell(2, 2); }
    cell23.onclick = (e) => { this.clickCell(2, 3); }
    cell31.onclick = (e) => { this.clickCell(3, 1); }
    cell32.onclick = (e) => { this.clickCell(3, 2); }
    cell33.onclick = (e) => { this.clickCell(3, 3); }
    
    reset.onclick = (e) => { this.reset(); }
  }

  game(t: HTMLElement[]) {
    this.table = t;
  }

  reset() {
    this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.gameRunning = true;
    for (let i = 0; i < 9; i++) {
      this.table[i].innerHTML = "";

    }
    this.resultado = 'Su turno';
  }

  clickCell(x: number, y: number) {
    this.resultado = "Empezo el juego";
    let p: number = 3 * (x - 1) + (y - 1);
    if (!this.gameRunning) {
      this.resultado = "Game Over";
    } else {
      if (this.board[p] == this.symbol) {
        this.resultado = "No se pude seleccionar esa casilla!";
      }
      else {
        if (this.board[p] == -this.symbol) {
          this.resultado = "No se pude seleccionar esa casilla!";
        }
        else {
          this.table[p].style.color = "#ff0000";
          this.table[p].innerHTML = "X";
          this.board[p] = 1;
          if (this.win(this.board) == 1) {
            this.gameRunning = false;
            this.resultado = "Ha ganado!";
            this.puntosUser += 1;
            this.score.score += 15;
            this.score.wons++;
            this.scoreService.add(this.score, 'scores-ticTacToe');
          } else {
            if (this.IsFull()) {
              this.gameRunning = false;
              this.resultado = "Empate";
              this.score.score += 5;
              this.score.ties++;
              this.scoreService.add(this.score, 'scores-ticTacToe');
            } else {
              let v = this.minimax(-1, true);
              this.board[v] = -1;
              this.table[v].style.color = "#0eff019e";
              this.table[v].innerHTML = "O";
              if (this.win(this.board) == -1) {
                this.gameRunning = false;
                this.resultado = "Perdiste BOT!";
                this.puntoPC += 1;
                this.score.score -= 20;
                this.score.losses++;
                this.scoreService.add(this.score, 'scores-ticTacToe');
              } else {
                if (this.IsFull()) {
                  this.gameRunning = false;
                  this.resultado = "Empate";
                  this.score.score += 5;
                  this.score.ties++;
                  this.scoreService.add(this.score, 'scores-ticTacToe');
                }
              }
            }
          }
        }
      }
    }
  }


  IsFull(): boolean {
    for (let i = 0; i < 9; i++) {
      if (this.board[i] == 0)
        return false;
    }
    return true;
  }

  win(board: number[]): number {
    var b = board[1];
    if (board[0] == b && b == board[2] && b != 0) return b;
    b = board[4];
    if (board[3] == b && b == board[5] && b != 0) return b;
    b = board[7];
    if (board[6] == b && b == board[8] && b != 0) return b;
    b = board[3];
    if (board[0] == b && b == board[6] && b != 0) return b;
    b = board[4];
    if (board[1] == b && b == board[7] && b != 0) return b;
    b = board[5];
    if (board[2] == b && b == board[8] && b != 0) return b;
    b = board[4];
    if (board[0] == b && b == board[8] && b != 0) return b;
    if (board[2] == b && b == board[6] && b != 0) return b;
    return 0;
  }

  minimax(currentPlayer: number, root: boolean): number {
    let winner = this.win(this.board);
    if (winner != 0)
      if (currentPlayer == -1)
        return winner;
      else
        return -winner;

    let possibleMoves: number[] = [];
    for (let i = 0; i < 9; i++) {
      if (this.board[i] == 0)
        possibleMoves.push(i);
    }
    let n: number = possibleMoves.length;

    if (n == 0)
      return 0;

    let which: number = -1;
    let v: number = 100;

    for (let j = 0; j < n; j++) {
      let move = possibleMoves[j];
      //play
      this.board[move] = currentPlayer;
      var m = Math.floor(Math.random() * (8 - 0)) + 0;;

      this.board[move] = 0;
      if (m < v) {
        v = m;
        which = move;
      }
    }

    if (root) {
      return (which)
    }
    else
      return (v)
  }
}