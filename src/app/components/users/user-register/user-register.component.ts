import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService, private router: Router) { }

  async onRegister() {
    const { email, password } = this.registerForm.value;
    try {
      const user = await this.authService.register(email, password);
      //Redirect to homepage
      console.log(user);

      if (user) { this.router.navigate(['/home']); }
    }
    catch (error) { console.log(error); }
  }
}
