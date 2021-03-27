import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { Message } from '../../models/message/message';

@Injectable({
  providedIn: 'root'
})
export class MessageRealService {

  ruthOfCollection = '/messageReal';
  referenceToCollection: AngularFireList<Message>;

  constructor(private db: AngularFireDatabase) {
    this.referenceToCollection = db.list(this.ruthOfCollection);
  }

  CreateOne(message: Message): any {
    return this.referenceToCollection.push(message);
  }
}
