import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from '../chats/chats.component';
import { GameListComponent } from './game-list/game-list.component';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { BoardComponent } from './tic-tac-toe/board/board.component';

//  Send unauthorized users to login
const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['user/login']);

const routes: Routes = [
  { path: '', redirectTo: 'list' },
  { path: 'list', component: GameListComponent },
  { path: 'chat', component: ChatsComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'tateti', component: BoardComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'ppp', component: PiedraPapelTijeraComponent, ...canActivate(redirectUnauthorizedToLogin) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
