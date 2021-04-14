import { Injectable } from '@angular/core';
import { Message } from 'src/app/models/message/message';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageFireService {
  public ruthOfCollection = "/message-fire";
  public referenceToCollection: AngularFirestoreCollection<Message>;

  constructor(private bd: AngularFirestore, private toastrService: ToastrService) {
    this.referenceToCollection = bd.collection(this.ruthOfCollection);
  }

  public async addOne(message: Message) {
    try {
      const result = await this.referenceToCollection.add({ ...message });  //  llaves es objeto, 3 puntitos es dinamico
      this.toastrService.success('Mensaje (Fire) Enviado con Exito', 'Estado del Mensaje');
      return result;
    }
    catch (error) { this.toastrService.error('Mensaje (Fire) no Enviado', 'Estado del Mensaje'); }
    return;
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