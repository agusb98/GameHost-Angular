import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Message } from '../../classes/message'

@Injectable({
  providedIn: 'root'
})

export class MessageFireService {

  ruthOfCollection = '/message-fire';
  referenceToCollection: AngularFirestoreCollection<Message>;

  constructor(private bd: AngularFirestore) {
    this.referenceToCollection = bd.collection(this.ruthOfCollection);
  }

  Create(message: Message): any {
    return this.referenceToCollection.add({ ...message });
  }

  GetAll(): AngularFirestoreCollection<Message> {
    return this.referenceToCollection;
  }

  Delete(id: any): Promise<void> {
    return this.referenceToCollection.doc(id).delete();
  }

  Update(id: any, datos: any): Promise<void> {
    return this.referenceToCollection.doc(id).update(datos);
  }
}
