import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WhoAmIComponent } from './components/who-am-i/who-am-i.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'who-am-i', component: WhoAmIComponent },
  { path: 'user', loadChildren: () => import('../app/components/users/user-routing.module').then(m => m.UserRoutingModule) },
  { path: 'games', loadChildren: () => import('../app/components/games/game-routing.module').then(m => m.GameRoutingModule) },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }