import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from "../login/login";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  
  constructor(private router: Router) {}

  goLogin() {
    this.router.navigate(['/login']);
  }
}
