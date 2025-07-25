import { Component } from '@angular/core';
import { Card } from "../../components/card/card";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [Card, RouterLink],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {
  constructor(private router: Router) {}

  navigateToLogin() {
    console.log('Navigate to login clicked');
    this.router.navigate(['login'])
      .then(() => console.log('Navigation successful'))
      .catch(err => console.error('Navigation failed:', err));
  }
}
