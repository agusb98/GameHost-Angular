import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/models/user/user';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: User = new User();

  constructor(public afAuth: AngularFireAuth) { }

  async Login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    }
    catch (error) { console.log(error); }
    return;
  }

  async SignUp(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return result;
    }
    catch (error) { console.log(error); }
    return;
  }

  async Logout() {
    try { await this.afAuth.signOut(); }
    catch (error) { console.log(error); }
    return;
  }

  async GetCurrentuser() {
    try {
      return this.afAuth.authState.pipe(first()).toPromise();
    }
    catch (error) { console.log(error); }
    return;
  }
}
