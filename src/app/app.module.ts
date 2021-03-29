import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire'
import { environment } from 'src/environments/environment';
import { IndexComponent } from './components/index/index.component';
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';
import { GameListComponent } from './components/games/game-list/game-list.component';

import { GameService } from './services/game/game.service'
import { AuthService } from './services/auth/auth.service';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserLoginComponent } from './components/users/user-login/user-login.component';
import { UserSignupComponent } from './components/users/user-signup/user-signup.component';
import { GameDetailsComponent } from './components/games/game-details/game-details.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UserProfileComponent,
    GameListComponent,
    NavigationComponent,
    UserLoginComponent,
    UserSignupComponent,
    GameDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [
    GameService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
