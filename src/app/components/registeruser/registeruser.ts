import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-registeruser',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './registeruser.html',
  styleUrl: './registeruser.css'
})
export class Registeruser {
  @Output() close = new EventEmitter<void>();

  formData = {
    username: '',
    email: '',
    full_name: '',
    graduatedyear: 0,
    phone: '',
    role: 'user',
    hashed_password: '',
    is_active: true
  };

  constructor(private userService: UserService, private messageService : MessageService) {}

  onClose() {
    this.close.emit();
  }

  onRegister() {
    if (!this.formData.username || !this.formData.email || !this.formData.full_name || !this.formData.graduatedyear || !this.formData.phone || !this.formData.hashed_password) {
      this.messageService.add({severity:'info', summary: 'Warning', detail: 'Please fill all fields!'});
      return;
    }
    this.userService.registerUser(this.formData).subscribe({
      next: (res: any) => {
        //redirecting to login pop overlay
        this.onClose();
        this.messageService.add({severity:'success', summary: 'Success', detail: 'User registered successfully!'});
        //open login popup
        
        
      },
      error: (err: any) => {
        console.error(err);
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Registration failed! Check your Credentials.'});
      }
    });
  }
}
