import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Signup as SignupService } from '../../services/signup';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'],
  providers: [MessageService]
})
export class Signup {
  signupForm: FormGroup;
  isSubmitting = false; // <-- Track pending request

  constructor(
    private router: Router,
    private messageService: MessageService,
    private fb: FormBuilder,
    private signupService: SignupService
  ) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      full_name: ['', Validators.required],
      graduatedyear: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      phone: ['', Validators.required],
      role: ['user', Validators.required],
      hashed_password: ['', Validators.required],
      is_active: [true, Validators.required]
    });
  }

  submitForm() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      this.messageService.add({
        severity: 'error',
        summary: 'Validation Error',
        detail: 'Please fill all required fields correctly'
      });
      return;
    }

    this.isSubmitting = true; // start loader

    this.signupService.registerUser(this.signupForm.value).subscribe({
      next: (response) => {
        this.isSubmitting = false; // stop loader
        this.messageService.add({ severity: 'success', summary: 'success', detail: 'User created successfully', life: 3000 });
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      error: (err) => {
        this.isSubmitting = false; // stop loader
        const errorMessage = err?.error?.message || err?.error?.detail || 'Failed to create account. Please try again.';
        this.messageService.add({ 
          severity: 'error', 
          summary: 'Registration Failed', 
          detail: errorMessage, 
          life: 3000 
        });
      }
    });
  }

  goLogin() {
    this.router.navigate(['/login']);
  }
}
