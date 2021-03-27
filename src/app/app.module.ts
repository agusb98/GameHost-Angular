import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChatComponent } from './pages/chat/chat.component';
import { ListComponent } from './pages/list/list.component';
import { UserComponent } from './pages/user/user.component';

import { FormsModule } from '@angular/forms';
//import {AngularFireModule} from '@angular/fire'
//import { environment } from 'src/environments/environment';
import { IndexComponent } from './pages/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ListComponent,
    UserComponent,
    IndexComponent
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
