import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers:[AuthService]
})
export class UserLoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onLogin() {
    const { email, password } = this.loginForm.value;
    try {
      const user = await this.authService.Login(email, password); 
      //Redirect to homepage
      if(user){ this.router.navigate(['/index']);  }
    } 
    catch (error) { console.log(error); }
  }
}
