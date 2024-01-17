import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeServiceService {

  constructor(private http : HttpClient) { }
  private eventbaseUrl = 'http://localhost:8089/api/v1/commande';
  createCommande(commade : any, eventName :string) : Observable<any> {
    return this.http.post<any>(`${this.eventbaseUrl}/createCommande/${eventName}`,commade)
  }
  getAllCommandesByEvent(eventName: string): Observable<any> {
    return this.http.get<any>(`${this.eventbaseUrl}/getAllCommandesByEvent/${eventName}`);
  }

}
