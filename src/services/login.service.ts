import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  loginstatus: boolean = false;

  login() {
    this.loginstatus = true;
  }
  logout() {
    this.loginstatus = false;
  }

  getlogstatus() {
    return this.loginstatus;
  }
}
