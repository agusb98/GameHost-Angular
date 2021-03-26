import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public vigentUser: string;

  constructor() { 
    this.vigentUser = 'someone';
  }
}
