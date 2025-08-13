import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user';
import { ToastModule } from 'primeng/toast';
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
    this.userService.registerUser(this.formData).subscribe({
      next: (res: any) => {
        alert('User registered successfully!');
        //redirecting to login pop overlay
        this.onClose();
        this.messageService.add({severity:'success', summary: 'Success', detail: 'User registered successfully!'});
        //open login popup
        
        
      },
      error: (err: any) => {
        console.error(err);
        alert('Registration failed!');
      }
    });
  }
}
