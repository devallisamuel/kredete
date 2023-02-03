import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { environment } from '../../environments/environment';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loginSuccessful } from '../store/actions/actions';

@Component({
  selector: 'kredete-frontends-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userData: any;
  constructor(
    private _authService: AuthService,
    private router: Router,
    public oidcSecurityService: OidcSecurityService,
    private store:Store
  ) {
  }

  ngOnInit() {
    this.oidcSecurityService
      .checkAuth()
      .subscribe(({ isAuthenticated, userData, accessToken, idToken }) => {
        if (isAuthenticated) {
          this.userData = userData;
          this.store.dispatch(loginSuccessful({"userData":userData}));
          this.router.navigate(["dashboard"], {replaceUrl:true});
        } else {
          this.oidcSecurityService.authorize();
        }
      });
  }


  logout(message: string) {
    console.log(message);
    this.oidcSecurityService.logoffAndRevokeTokens();
  }
}
