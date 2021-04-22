import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { BoardComponent } from './tic-tac-toe/board/board.component';
import { SquareComponent } from './tic-tac-toe/square/square.component';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule
  ],
  declarations: [
    BoardComponent, 
    SquareComponent, 
    PiedraPapelTijeraComponent
  ]
})
export class GameModule { }
