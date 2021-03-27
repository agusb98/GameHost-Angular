import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Game } from '../../models/game/game'

@Injectable({
  providedIn: 'root'
})

export class GameService {

  ruthOfCollection = '/game';
  referenceToCollection: AngularFirestoreCollection<Game>;
  selectedGame: Game = new Game();

  constructor(private bd: AngularFirestore) {
    this.referenceToCollection = bd.collection(this.ruthOfCollection);
  }

  Create(game: Game): any {
    return this.referenceToCollection.add({ ...game });
  }

  GetAll(): AngularFirestoreCollection<Game> {
    return this.referenceToCollection;
  }

  Delete(id: any): Promise<void> {
    return this.referenceToCollection.doc(id).delete();
  }

  Update(id: any, datos: any): Promise<void> {
    return this.referenceToCollection.doc(id).update(datos);
  }
}
