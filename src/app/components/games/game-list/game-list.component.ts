import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../services/game/game.service';

import { Game } from '../../../models/game/game';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  gameList: Game[];

  constructor(
    private gameService: GameService,
    private toastr: ToastrService
    ) { 
      this.gameList = [];
    }

  ngOnInit(): void {/*
    this.gameService.GetAll()
    .snapshotChanges()
    .subscribe(item => {
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["id"] = element.id;
        this.gameList.push(x as Game);
      })
    });*/
  }

  onDelete($id: string){
    if(confirm('Are you sure want to delete it?')){
      this.gameService.Delete($id);
      this.toastr.success('Successfull Operation', 'Game Deleted');
    }
  }

  onUpdate(game: Game){
    if(confirm('Are you sure want to edit it?')){
    this.gameService.selectedGame = Object.assign({}, game);
    this.toastr.success('Successfull Operation', 'Game Updated');
    }
  }

}
