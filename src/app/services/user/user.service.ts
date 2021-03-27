import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { User } from '../../models/user/user'

@Injectable({
  providedIn: 'root'
})

export class UserService {

  ruthOfCollection = '/user';
  referenceToCollection: AngularFirestoreCollection<User>;
  selectedUser: User = new User();
  
  public vigentUser: string;
  
  constructor(private bd: AngularFirestore) {
    this.vigentUser = 'someone';
    this.referenceToCollection = bd.collection(this.ruthOfCollection);
  }

  Create(user: User): any {
    return this.referenceToCollection.add({ ...user });
  }

  GetAll(): AngularFirestoreCollection<User> {
    return this.referenceToCollection;
  }

  Delete(id: any): Promise<void> {
    return this.referenceToCollection.doc(id).delete();
  }

  Update(id: any, datos: any): Promise<void> {
    return this.referenceToCollection.doc(id).update(datos);
  }
}
