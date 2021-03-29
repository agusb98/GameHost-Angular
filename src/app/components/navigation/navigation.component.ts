import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [AuthService]
})
export class NavigationComponent implements OnInit {
  
  public isLogged = false;
  public user: any;

  constructor(private authService: AuthService, private router: Router) { }

  async ngOnInit() {
    this.user = await this.authService.GetCurrentuser();
    
    if (this.user) { this.isLogged = true; }
  }

  async onLogout(){
    try {
      await this.authService.Logout();
    } 
    catch (error) { console.log(error); }
  }
}
