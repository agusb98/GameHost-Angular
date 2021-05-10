import { Injectable } from '@angular/core';
import { COLORS, START_COUNT } from '../models/state';
import { Subject } from 'rxjs';
import { ScoreService } from './score.service';
import { Score } from '../models/score';

@Injectable({
  providedIn: 'root'
})
export class SimonStateService {
  count: number;
  simon: string[] = [];
  player: string[] = [];
  state = new Subject<any>();
  public score: Score = new Score;

  constructor(private scoreService: ScoreService) {
    this.count = START_COUNT;
    
    //Setting score values before user lose
    this.score.user = localStorage.getItem('email');
    this.score.game = 'simon';
  }

  private get randomColor(): string {
    return COLORS[Math.floor(Math.random() * 4)];
  }

  generateSimon(): string[] {
    this.simon = [];
    for (let i = 0; i < this.count; i++) {
      this.appendSimon();
    }

    this.setState();
    return this.simon;
  }

  appendSimon(increment: boolean = false): void {
    if (increment) {
      this.count++;
    }
    this.simon.push(this.randomColor);
  }

  restartSimon(): string[] {
    this.count = START_COUNT;
    return this.generateSimon();
  }

  playerGuess(val: string) {
    this.player.push(val);
    if (!this.compareSimon()) {
      this.player = [];
    }

    this.setState();
  }

  compareSimon(): boolean {
    for (let i = 0; i < this.player.length; i++) {
      if (this.player[i] !== this.simon[i]) {
        this.score.score += i * 4;
        this.scoreService.add(this.score, 'scores-simon');  //Save score when user lose (auto)
        return false;
      }
    }

    if (this.player.length === this.simon.length) {
      this.updateGame();
    }

    return true;
  }

  updateGame() {
    this.appendSimon(true);
    this.player = [];
  }

  setState() {
    this.state.next({
      player: this.player,
      simon: this.simon,
      count: this.count
    });
  }
}