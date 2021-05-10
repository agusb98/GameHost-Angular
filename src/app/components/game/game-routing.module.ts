import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './game-list/game-list.component';
import { MemotestComponent } from './memotest/memotest.component';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { SimonComponent } from './simon/simon.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

//  Send unauthorized users to login
const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['user/login']);

const routes: Routes = [
  { path: '', redirectTo: 'list' },
  { path: 'list', component: GameListComponent },
  { path: 'simon', component: SimonComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'tateti', component: TicTacToeComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'memotest', component: MemotestComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'ppp', component: PiedraPapelTijeraComponent, ...canActivate(redirectUnauthorizedToLogin) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
