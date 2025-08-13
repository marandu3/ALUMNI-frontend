import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-registeruser',
  standalone: true,
  imports: [FormsModule],
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

  constructor(private userService: UserService) {}

  onClose() {
    this.close.emit();
  }

  onRegister() {
    this.userService.registerUser(this.formData).subscribe({
      next: (res: any) => {
        alert('User registered successfully!');
        this.onClose();
      },
      error: (err: any) => {
        console.error(err);
        alert('Registration failed!');
      }
    });
  }
}
