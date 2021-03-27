import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game/game.service';

import { Game } from '../../../models/game/game';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(
    public gameService: GameService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.gameService.GetAll();
    this.resetForm();
  }

  onSubmit(gameForm: NgForm) {
    if (gameForm.value.$id == null)
      this.gameService.Create(gameForm.value);
    else
      this.gameService.Update(gameForm.value.id, gameForm.value);

    this.resetForm(gameForm);
    this.toastr.success('Successfull Operation');
  }

  resetForm(gameForm?: NgForm){
    if(gameForm != null)
      gameForm.reset();
      this.gameService.selectedGame = new Game();
  }
}