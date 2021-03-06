import { NgModule } from '@angular/core';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from '../chats/chats.component';
import { SurveyComponent } from '../survey/survey.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegisterComponent } from './user-register/user-register.component';

//  Send unauthorized users to login
const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['user/login']);

//  Automatically log in users
const redirectLoggedInToHome = () =>
  redirectLoggedInTo(['home']);

const routes: Routes = [
  { path: '', redirectTo: 'login' },
  { path: 'login', component: UserLoginComponent, ...canActivate(redirectLoggedInToHome) },
  { path: 'register', component: UserRegisterComponent, ...canActivate(redirectLoggedInToHome) },
  { path: 'chat', component: ChatsComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'profile', component: UserProfileComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'logout', component: UserLogoutComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'survey', component: SurveyComponent, ...canActivate(redirectUnauthorizedToLogin) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
