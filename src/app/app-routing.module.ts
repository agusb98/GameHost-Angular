import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';
import { UserLoginComponent } from './components/users/user-login/user-login.component';
import { UserSignupComponent } from './components/users/user-signup/user-signup.component';
import { GameDetailsComponent } from './components/games/game-details/game-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'game/:id', component: GameDetailsComponent },
  { path: 'user/login', component: UserLoginComponent },
  { path: 'user/signup', component: UserSignupComponent },
  { path: 'user/profile', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }