import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Survey } from '../models/survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private ruthOfCollection = "/survey";
  private referenceToCollection: AngularFirestoreCollection<Survey>;

  constructor(private db: AngularFirestore, private toastr: ToastrService) {
    this.referenceToCollection = db.collection(this.ruthOfCollection);
  }

  async add(survey: Survey) {
    try {
      const result = await this.referenceToCollection.add({ ...survey });  //  llaves es objeto, 3 puntitos es dinamico
      this.toastr.success('Answer saved successfully', 'Status Survey');
      return result;
    }
    catch (error) { this.toastr.error('Error at the moment to save survey..', 'Status Survey'); }
    return;
  }

  getAll(): AngularFirestoreCollection<Survey> {
    return this.referenceToCollection;
  }
}