import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../providers/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private _auth: AuthenticationService, private router: Router) {}

  ngOnInit() {}

  googleLogin() {
    this._auth
      .googleLogin()
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  facebookLogin() {
    this.router.navigate(['/']);
  }
}
