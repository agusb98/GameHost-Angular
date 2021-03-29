import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { getDefaultCompilerOptions } from 'typescript';

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

  searchCharacters(query = '', page = 1){
    
  }

  getDetails(id: number){

  }
}
