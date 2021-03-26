import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from '../app/pages/chat/chat.component';
import { ListComponent } from '../app/pages/list/list.component';
import { UserComponent } from '../app/pages/user/user.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'index'},
  { path: 'index', component: IndexComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'list', component: ListComponent },
  { path: 'user', component: UserComponent }
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }