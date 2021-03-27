import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from '../app/components/chat/chat.component';
import { GameComponent } from './components/games/game/game.component';
import { IndexComponent } from './components/index/index.component';
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';
import { UserSigninComponent } from './components/users/user-signin/user-signin.component';
import { UserSignupComponent } from './components/users/user-signup/user-signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'games', component: GameComponent },
  { path: 'user/signin', component: UserSigninComponent },
  { path: 'user/signup', component: UserSignupComponent },
  { path: 'user/profile', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }