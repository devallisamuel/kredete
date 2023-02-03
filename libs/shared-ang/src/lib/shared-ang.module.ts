import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SignInComponent } from './signin/signin.component';
import { loginReducer } from './store/reducer/login.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("user",loginReducer ),
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'signin',
        component: SignInComponent,
      },
    ]),
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent, SignInComponent],
})
export class SharedAngModule {}
