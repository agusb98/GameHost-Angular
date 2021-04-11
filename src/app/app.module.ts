import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire'
import { environment } from 'src/environments/environment';
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';
import { GameListComponent } from './components/games/game-list/game-list.component';

import { GameService } from './services/game/game.service'
import { AuthService } from './services/auth/auth.service';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserLoginComponent } from './components/users/user-login/user-login.component';
import { GameDetailsComponent } from './components/games/game-details/game-details.component';
import { UserRegisterComponent } from './components/users/user-register/user-register.component';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    GameListComponent,
    NavigationComponent,
    UserLoginComponent,
    GameDetailsComponent,
    UserRegisterComponent,
    HomeComponent,
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
    GameService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
