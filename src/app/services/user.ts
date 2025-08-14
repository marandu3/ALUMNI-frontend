import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = 'http://localhost:8080/user'; // Change to your backend URL
  private LOGIN_URL = 'http://localhost:8080/token'; // Change to your backend URL

  constructor(private http: HttpClient) {}

  registerUser(data: any): Observable<any> {
    return this.http.post(this.API_URL, data);
  }

  

  loginUser(data: any): Observable<any> {
    const params = new HttpParams()
      .set('username', data.username)
      .set('password', data.password);
    return this.http.post(
      `${this.LOGIN_URL}`, 
      params.toString(),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        observe: 'response'
  }
    );
  }
}
