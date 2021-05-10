import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Score } from 'src/app/models/score';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.css']
})
export class ScoreListComponent implements OnInit {

  listScores$: Observable<Score[]>;
  user: string = localStorage.getItem('email');
  @Input() gameName: string;

  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.listScores$ = this.scoreService.getAllByGame(this.gameName).valueChanges();
  }
}
