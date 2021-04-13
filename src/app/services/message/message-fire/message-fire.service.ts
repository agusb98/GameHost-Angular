import { Injectable } from '@angular/core';
import { Message } from 'src/app/models/message/message';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessageFireService {
  public ruthOfCollection = "/message-fire";
  public referenceToCollection: AngularFirestoreCollection<Message>;

  constructor(private bd: AngularFirestore) {
    this.referenceToCollection = bd.collection(this.ruthOfCollection);
  }

  public addOne(message: Message): any {
    return this.referenceToCollection.add({ ...message });  //  llaves es objeto, 3 puntitos es dinamico
  }

  public getAll(): AngularFirestoreCollection<Message> {
    return this.referenceToCollection;
  }

  public deleteOne(id: any) {
    return this.referenceToCollection.doc(id).delete();
  }

  public setOne(id: any, data: any) {
    return this.referenceToCollection.doc(id).update(data);
  }
}