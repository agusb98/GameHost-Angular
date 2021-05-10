import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Game } from '../models/game';
import { Score } from '../models/score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  constructor(private db: AngularFirestore, private toastr: ToastrService) { }

  async add(score: Score, pathOfCollection: string) {
    try {
      const result = await this.db.collection(pathOfCollection).add({ ...score });  //  llaves es objeto, 3 puntitos es dinamico
      this.toastr.success('Results saved successfully', 'Status Score');
      return result;
    }
    catch (error) { this.toastr.error('Error at the moment to save score..', 'Status Score'); }
    return;
  }

  getAllByGame(game: string) {
    try {
      switch (game) {
        case 'ticTacToe': {
          return this.db.collection<Score>('scores-ticTacToe', ref => ref.orderBy('score', 'asc'));
        }
        case 'piedraPapelTijera': {
          return this.db.collection<Score>('scores-piedraPapelTijera', ref => ref.orderBy('score', 'asc'));
          break;
        }
        case 'memotest': {
          return this.db.collection<Score>('scores-memotest', ref => ref.orderBy('score', 'asc'));
          break;
        }
        case 'simon': {
          return this.db.collection<Score>('scores-simon', ref => ref.orderBy('score', 'asc'));
          break;
        }
      }
    } catch (error) { this.toastr.error('Error at the moment to get scores..', 'Status Scores'); }
  }
}