import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { OidcSecurityService } from "angular-auth-oidc-client";
import { UserManager, User } from "oidc-client";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private oidcSecurityService:OidcSecurityService) {}
  //   private _userManager: UserManager | undefined;
  //   private _user: User | any;
  //   private _loginChangedSubject = new Subject<boolean>();
  //   loginChanged = this._loginChangedSubject.asObservable();

  // initAuthProcess ({authority,redirect_uri,client_id,scope,response_type,post_logout_redirect_uri}:any) {
  //     const stsSettings = {
  //         authority,
  //         client_id,
  //         redirect_uri,
  //         scope,
  //         response_type,
  //         post_logout_redirect_uri,
  //     }

  //     this._userManager = new UserManager(stsSettings);
  // }

  // login () {
  //     return this._userManager?.signinRedirect();
  // }

  // isLoggedIn(): Promise<boolean> | undefined {
  //     return this._userManager?.getUser()
  //     .then(user => {
  //         const userCurrent = !!user && !user.expired;
  //         if (this._user !== user) {
  //             this._loginChangedSubject.next(userCurrent);
  //         }
  //         this._user = user;
  //         return userCurrent;
  //     });
  // }

  // completeLogin () {
  //     return this._userManager?.signinRedirectCallback().then(user => {
  //         this._user = user;
  //         this._loginChangedSubject.next(!!user && !user.expired);
  //         console.log("============",user);
  //         return user;
  //     })
  // }

  loggedIn = false;

  get isLoggedIn() {
    this.oidcSecurityService.isAuthenticated$.subscribe((res) => {
      this.returnValue(res);
    });
    return this.loggedIn;
  }

  returnValue(val:any) {
    this.loggedIn = val;
  }

  get refreshToken() {
    return this.oidcSecurityService.getRefreshToken();
  }

  refreshSession() {
    return this.oidcSecurityService.forceRefreshSession();
  }

  get token() {
    return this.oidcSecurityService.getIdToken();
  }

  get tokenId() {
    return this.oidcSecurityService.getIdToken();
  }

  get userData() {
    return this.oidcSecurityService.userData$;
  }

  checkAuth() {
    return this.oidcSecurityService.checkAuth();
  }

  doLogin() {
    return of(this.oidcSecurityService.authorize());
  }

  signOut() {
    this.oidcSecurityService.logoffAndRevokeTokens();
  }
}
