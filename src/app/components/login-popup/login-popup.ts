import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-popup',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './login-popup.html',
  styleUrl: './login-popup.css'
})
export class LoginPopup {
  @Output() close = new EventEmitter<void>();

  loginData ={
    username: '',
    password: ''
  }

  constructor(private userService: UserService, private MessageService: MessageService, private router: Router) {}

  onLogin() {
    if (!this.loginData.username || !this.loginData.password) {
      this.MessageService.add({severity:'info', summary: 'Warning', detail: 'Please fill all fields!'});
      return;      
    }
    

    this.userService.loginUser(this.loginData).subscribe({
      next: (res: any) => {
        this.MessageService.add({severity:'success', summary: 'Success', detail: 'Login successful!'});
        console.log('Login successful:', res);
        localStorage.setItem('token', res.token); // Store the token in local storage
        this.close.emit(); // Close the popup on successful login
        // Optionally, you can redirect to a dashboard or another page here
        // For example, you can use Angular Router to navigate to the dashboard
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        console.error('Login failed:', err);
        this.MessageService.add({severity:'error', summary: 'Error', detail: 'Login failed!'});
        // Optionally, you can handle specific error messages here
      }
    });
  }


  onClose() {
    this.close.emit();
  }
}
