import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChatComponent } from './components/chat/chat.component';

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire'
import { environment } from 'src/environments/environment';
import { IndexComponent } from './components/index/index.component';
import { UserSigninComponent } from './components/users/user-signin/user-signin.component';
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';
import { GamesComponent } from './components/games/games.component';
import { GameListComponent } from './components/games/game-list/game-list.component';

import { GameService } from './services/game/game.service'
import { UserService } from './services/user/user.service';
import { GameComponent } from './components/games/game/game.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserSignupComponent } from './components/users/user-signup/user-signup.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    IndexComponent,
    UserSignupComponent,
    UserSigninComponent,
    UserProfileComponent,
    GamesComponent,
    GameListComponent,
    GameComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    GameService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
