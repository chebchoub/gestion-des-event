import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserServiceService } from './user-service.service';
import { User } from './user';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly authTokenKey = 'authToken';

  constructor(private http: HttpClient, private userService : UserServiceService) { }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getDecodedToken(): any {
    const token = this.getToken();
    if (token) {
      return jwtDecode(token); // Utilisation de jwt-decode pour décoder le token JWT
    }
    return null;
  }

  userDetails : any;
  userEmail :string="";

  getUserDetails(): string {
    const userDetails = this.getDecodedToken();
    if (userDetails && userDetails.hasOwnProperty("sub")) {
      this.userEmail = userDetails.sub; // userEmail est une variable du composant pour stocker l'e-mail
      return this.userEmail;
  }
  return "";
}}
