import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appRoutes } from './app.routes';
import { LandingComponent } from './pages/landing/landing.component';
import { MaterialModule } from '@kredete-frontends/third-party-style';
import { SharedAngModule } from "@kredete-frontends/shared-ang";
import { environment } from '../environments/environment';
import {
  AuthModule,
  LogLevel,
  OidcSecurityService,
} from 'angular-auth-oidc-client';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      name: 'partners',
      maxAge: 25,
      logOnly:false,
    }),
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    AuthModule.forRoot({
      config: {
        authority: environment.idServer,
        redirectUrl: environment.returnUrl,
        postLogoutRedirectUri: environment.returnUrl,
        clientId: environment.clientId,
        scope: environment.scope,
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
      },
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
