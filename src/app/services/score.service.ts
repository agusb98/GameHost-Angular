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

  constructor(private db: AngularFirestore, private toastr: ToastrService) {
    this.referenceToCollection = db.collection(this.ruthOfCollection);
    this.referenceSorted = db.collection<Score>('scores', ref => ref.orderBy('date_created', 'desc'));
  }

  async add(score: Score) {
    try {
      const result = await this.referenceToCollection.add({ ...score });  //  llaves es objeto, 3 puntitos es dinamico
      this.toastr.success('Results saved successfully', 'Status Score');
      return result;
    }
    catch (error) { this.toastr.error('Error at the moment to save score..', 'Status Score'); }
    return;
  }

  getAll(): AngularFirestoreCollection<Score> {
    return this.referenceToCollection;
  }

  async getByUser(user: string) {
    const ref = this.db.collection('scores');
    
  }
}