import { Component, OnInit } from '@angular/core';
import { sleep } from 'src/app/models/state';
import { SimonStateService } from 'src/app/services/simon-state.service';

@Component({
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.css']
})
export class SimonComponent implements OnInit {
  count: number;
  colors: any = {
    red: false,
    blue: false,
    green: false,
    yellow: false
  };

  public gameFlag = false;
  constructor(private simonService: SimonStateService) { }

  ngOnInit() {
  }

  play() {
    this.gameFlag = true;
    this.simonService.state.subscribe(state => {
      if (this.count != state.count) {
        this.count = state.count;
        this.teasePlayer(state.simon);
      }
    });
    this.simonService.generateSimon();
  }

  playerGuess(e: string) {
    if (this.gameFlag) {  //user must click on Play's button before game
      this.simonService.playerGuess(e);
    }
  }

  async teasePlayer(simon: string[]) {
    for (let i = 0; i < simon.length; i++) {
      this.colors[simon[i]] = true;
      await sleep(500);
      this.colors[simon[i]] = false;
      await sleep(200);
    }
  }
}