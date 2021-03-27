import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from '../app/pages/chat/chat.component';
import { ListComponent } from '../app/pages/list/list.component';
import { IndexComponent } from './pages/index/index.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { UserSigninComponent } from './pages/user/user-signin/user-signin.component';
import { UserSignupComponent } from './pages/user/user-signup/user-signup.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'index'},
  { path: 'index', component: IndexComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'list', component: ListComponent },
  { path: 'user/signin', component: UserSigninComponent },
  { path: 'user/signup', component: UserSignupComponent },
  { path: 'user/profile', component: UserProfileComponent }
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }