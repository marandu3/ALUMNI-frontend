import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from "../login/login";
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  
  constructor(private router: Router, private messageService: MessageService) {}

  goLogin() {
    this.router.navigate(['/login']);
    this.messageService.add({severity:'info', summary: 'Navigate', detail: 'Navigating to Login Page'});

    }
  
}
