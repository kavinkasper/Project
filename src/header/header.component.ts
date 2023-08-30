import { Component } from '@angular/core';
import { ActivateService } from 'src/services/activate.service';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public loginService: LoginService) {
  }
}
