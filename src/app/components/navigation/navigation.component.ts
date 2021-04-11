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
    this.user = await this.authService.getCurrentuser();
    
    if (this.user) { this.isLogged = true; }
  }

  async onLogout(){
    try {
      await this.authService.logout();
    } 
    catch (error) { console.log(error); }
  }
}
