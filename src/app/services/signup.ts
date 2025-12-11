import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface SignupData {
  username: string,
  email: string
  full_name: string
  graduatedyear: number,
  phone: string,
  role: string,
  hashed_password: string,
  is_active: boolean,
}


@Injectable({
  providedIn: 'root',
})
export class Signup {

  base_url='https://alumni-backend-2-vdv4.onrender.com/';
  constructor(private http: HttpClient) {}

  registerUser(data: SignupData) {
    return this.http.post(this.base_url +'user',data)
  }
  

}
