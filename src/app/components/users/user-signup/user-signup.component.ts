import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

import { User } from '../../../models/user/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor(
    public userService: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.userService.GetAll();
  }
}