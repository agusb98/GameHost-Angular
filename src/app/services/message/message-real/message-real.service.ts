import { Injectable } from '@angular/core';
import { Message } from 'src/app/models/message/message';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";

@Injectable({
  providedIn: 'root'
})
export class MessageRealService {
  public rutaDeLaColeccion = "/message-real";
  public referenceToCollection: AngularFireList<Message>;

  constructor(private db: AngularFireDatabase) {
    this.referenceToCollection = db.list(this.rutaDeLaColeccion);
  }

  public async addOne(message: Message) {
    try {
      const result = await this.referenceToCollection.push(message);
      return result;
    }
    catch (error) { console.log('Error al intentar enviar Mensaje'); }
    return;
  }
}