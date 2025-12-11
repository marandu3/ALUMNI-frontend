import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-layout',
  imports: [RouterLink, RouterLinkActive, CommonModule, ToastModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

}
