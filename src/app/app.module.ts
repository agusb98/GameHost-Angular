import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire'
import { environment } from 'src/environments/environment';
import { GameListComponent } from './components/game/game-list/game-list.component';

import { AuthService } from './services/auth.service';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserLoginComponent } from './components/users/user-login/user-login.component';
import { UserRegisterComponent } from './components/users/user-register/user-register.component';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './components/home/home.component';
import { WhoAmIComponent } from './components/who-am-i/who-am-i.component';
import { ChatsComponent } from './components/chats/chats.component';
import { PiedraPapelTijeraComponent } from './components/game/piedra-papel-tijera/piedra-papel-tijera.component';
import { SurveyComponent } from './components/survey/survey.component';
import { HttpClientModule } from '@angular/common/http';
import { TicTacToeComponent } from './components/game/tic-tac-toe/tic-tac-toe.component';
import { MemotestComponent } from './components/game/memotest/memotest.component';
import { ScoreListComponent } from './components/score/score-list/score-list.component';
import { SimonComponent } from './components/game/simon/simon.component';
import { GameButtonComponent } from './components/game/simon/game-button/game-button.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    NavigationComponent,
    UserLoginComponent,
    UserRegisterComponent,
    HomeComponent,
    WhoAmIComponent,
    ChatsComponent,
    PiedraPapelTijeraComponent,
    TicTacToeComponent,
    MemotestComponent,
    SurveyComponent,
    ScoreListComponent,
    SimonComponent,
    GameButtonComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    })
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
