import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChatComponent } from './pages/chat/chat.component';
import { ListComponent } from './pages/list/list.component';

import { FormsModule } from '@angular/forms';
//import {AngularFireModule} from '@angular/fire'
//import { environment } from 'src/environments/environment';
import { IndexComponent } from './pages/index/index.component';
import { UserSignupComponent } from './pages/user/user-signup/user-signup.component';
import { UserSigninComponent } from './pages/user/user-signin/user-signin.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ListComponent,
    IndexComponent,
    UserSignupComponent,
    UserSigninComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
