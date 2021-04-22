import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire'
import { environment } from 'src/environments/environment';
import { GameListComponent } from './components/games/game-list/game-list.component';

import { AuthService } from './services/auth.service';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserLoginComponent } from './components/users/user-login/user-login.component';
import { UserRegisterComponent } from './components/users/user-register/user-register.component';
import { ToastrModule } from 'ngx-toastr';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { WhoAmIComponent } from './components/who-am-i/who-am-i.component';
import { BoardComponent } from './components/games/tic-tac-toe/board/board.component';
import { SquareComponent } from './components/games/tic-tac-toe/square/square.component';
import { ChatsComponent } from './components/chats/chats.component';
import { PiedraPapelTijeraComponent } from './components/games/piedra-papel-tijera/piedra-papel-tijera.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    NavigationComponent,
    UserLoginComponent,
    UserRegisterComponent,
    HomeComponent,
    ContactComponent,
    WhoAmIComponent,
    ChatsComponent,
    BoardComponent,
    SquareComponent,
    PiedraPapelTijeraComponent
  ],
  imports: [
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
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
