import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private router: Router) {}

  navigateToregister() {
    this.router.navigate(['register']);
  }

  navigateToForgotPassword() {
    this.router.navigate(['forgot-password']);
  }
}
