import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'kredete-frontends-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor (private oidcSecurityService: OidcSecurityService, private store: Store) {

  }

ngOnInit(): void {
    // this.store.select(featureUser).subscribe(val => console.log(val));
    return;
  }
  logOut () {
      this.oidcSecurityService.logoffAndRevokeTokens();
  }
}
