import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { MemotestComponent } from './memotest/memotest.component';
import { SnakeComponent } from './snake/snake.component';
import { DinoComponent } from './dino/dino.component';
import { ButtonComponent } from './simon/button/button.component';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule
  ],
  declarations: [
    TicTacToeComponent,
    PiedraPapelTijeraComponent,
    MemotestComponent,
    SnakeComponent,
    DinoComponent,
    ButtonComponent
  ]
})
export class GameModule { }
