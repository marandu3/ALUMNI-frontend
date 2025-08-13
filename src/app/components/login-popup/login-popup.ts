import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-popup',
  standalone: true,
  templateUrl: './login-popup.html',
  styleUrl: './login-popup.css'
})
export class LoginPopup {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
