import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './../../services/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [AuthService]
})
export class NavigationComponent {
  public user$: Observable<any> = this.authService.afAuth.user;

  constructor(private authService: AuthService) { }
}
