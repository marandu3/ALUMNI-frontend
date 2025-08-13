import { Component, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Registeruser } from "./components/registeruser/registeruser";
import { LoginPopup } from "./components/login-popup/login-popup";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Registeruser, LoginPopup],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ALUMNI-frontend');
  isMenuOpen = false;
  isRegOpen = false;
  isLoginOpen = false;

  openRegister() {
    this.isRegOpen = true;
  }

  openLogin() {
    this.isLoginOpen = true;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
