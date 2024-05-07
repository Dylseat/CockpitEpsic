import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    login(email: string, password: string): { success: boolean; message?: string } {
        if (email === 'user@example.com' && password === 'password123') {
          localStorage.setItem('isLoggedin', 'true');
          return { success: true };
        } else {
          return { success: false, message: 'Invalid email or password' };
        }
      }
  
    isLoggedIn(): boolean {
      return localStorage.getItem('isLoggedin') === 'true';
    }
  }