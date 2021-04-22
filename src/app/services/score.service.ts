import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Score } from '../models/score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private ruthOfCollection = "/scores";
  private referenceToCollection: AngularFirestoreCollection<Score>;
  private referenceSorted: AngularFirestoreCollection<Score>;

  constructor(private bd: AngularFirestore, private toastr: ToastrService) {
    this.referenceToCollection = bd.collection(this.ruthOfCollection);
    this.referenceSorted = bd.collection<Score>('scores', ref => ref.orderBy('score', 'desc'));
  }

  async addScore(score: Score) {
    try {
      const result = await this.referenceToCollection.add({ ...score });  //  llaves es objeto, 3 puntitos es dinamico
      return result;
    }
    catch (error) { this.toastr.error('Error at the moment to save score..', 'Status Score'); }
    return;
  }

  getAll(): AngularFirestoreCollection<Score> {
    return this.referenceToCollection;
}
}