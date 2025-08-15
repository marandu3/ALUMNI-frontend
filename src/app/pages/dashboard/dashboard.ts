import { Component } from '@angular/core';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  imports: [NgIf],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  tokenExists() {
    return !!localStorage.getItem('token');
  }
  cleantoken() {
    localStorage.removeItem('token');
    console.log('Token cleared from local storage');
  }
}
