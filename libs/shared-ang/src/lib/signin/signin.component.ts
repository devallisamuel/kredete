import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'kredete-frontends-signin',
  templateUrl: './signin.component.html',
})
export class SignInComponent implements OnInit {
  constructor(private _authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    console.log("signed");
    // this._authService
    //   .completeLogin()
    //   ?.then((user) => {
    //     console.log(user,"==========");
    //     this.router.navigateByUrl("");
    // });
  }
}
