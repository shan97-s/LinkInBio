import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private signInUrl = 'http://localhost:4000/api/users/login'; // API endpoint for signin

  constructor(private http: HttpClient) {}

  
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
  signin(inpuData :any): Observable<any> {
    const signInUrl = `${environment.apiURL}/api/users/login`; // API endpoint for signin
    return this.http.post(signInUrl, { "email":inpuData.email, "password":inpuData.password });
  }
  signup(inpuData :any): Observable<any> {
    const signInUrl = `${environment.apiURL}/api/users/register`; // API endpoint for signin
    return this.http.post(signInUrl, { "email":inpuData.email, "password":inpuData.password, "name":inpuData.name, "username":inpuData.username });
  }
}
