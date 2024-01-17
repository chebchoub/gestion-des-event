import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { User } from './user';
import { AuthenticationResponse } from './authentication-response';
import { Observable, map } from 'rxjs';
import { AuthenticationRequest } from './authentication-request';
import { Event as myEvent } from './event';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http: HttpClient) {}

  // Auth services
  private authbaseUrl = 'http://localhost:8089/api/v1/auth';

  register(request: User): Observable<Optional> {
    return this.http.post<AuthenticationResponse>(`${this.authbaseUrl}/register`, request);
  }
  login(request: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.authbaseUrl}/authenticate`, request);
  }

  getUserById(id : string) : Observable<any> {
    return this.http.get<any>(`http://localhost:8089/api/v1/auth/user/${id}`);
  }

  getUserByEmail(email: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8089/api/v1/auth/user/${email}`);
  }
  logout(): void {
    localStorage.removeItem('token'); // Supprimez le token du localStorage
    // Si le token est stocké dans le localStorage
  }
  isLoggedIn(): boolean {
    // Vérifiez si un token est présent dans le localStorage ou tout autre mécanisme utilisé pour stocker le token
    return !!localStorage.getItem('token');
  }
  // data passing
  CategoryInput : string="";
  LocationInput: string="";


}
