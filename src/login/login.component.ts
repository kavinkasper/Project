import { Component } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  cakeCode: string = "";

  constructor(private login: LoginService, private route: Router) { }

  activestatus() {
    if (this.cakeCode === "KK123#") {
      this.login.login();
      this.route.navigateByUrl("/orders");
    }
    else {
      this.login.logout
    }
  }
}
