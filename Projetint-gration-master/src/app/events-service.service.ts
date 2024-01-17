import { Injectable } from '@angular/core';
import { Event, Event as myEvent } from './event';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { flush } from '@angular/core/testing';
@Injectable({
  providedIn: 'root'
})
export class EventsServiceService {

  constructor(private http : HttpClient) { }

    // event CRUD
    private eventbaseUrl = 'http://localhost:8089/api/v1/event';

    createEvents(event : myEvent, email :string) : Observable<any> {
      return this.http.post<any>(`${this.eventbaseUrl}/save/${email}`,event)
    }

    updateEvent(event : myEvent, id :string,email:string) : Observable<any> {
      return this.http.put<any>(`${this.eventbaseUrl}/edit/${id}/${email}`,event)
    }

    deleteEvent(id :string) : Observable<any> {
      return this.http.delete<any>(`${this.eventbaseUrl}/delete/${id}`);
    }
    getEvents(): Observable<Event[]> {
      return this.http.get<Event[]>(`${this.eventbaseUrl}/getAll`);
    }

    getEventsByUser(email :string) : Observable<myEvent[]> {
      return this.http.get<myEvent[]>(`${this.eventbaseUrl}/getAllByUser/${email}`)
    }
    getEventById(id :string) : Observable<myEvent> {
      return this.http.get<myEvent>(`${this.eventbaseUrl}/searchById/${id}`)
    }
    getEventByname(eventName :string) : Observable<myEvent> {
      return this.http.get<myEvent>(`${this.eventbaseUrl}/searchByName/${eventName}`)
    }
    getEventByDateTime(dateTime: Date): Observable<boolean> {
      // Convertir la date en un format adapté à votre API (ISO String par exemple)
      const isoDateTime = typeof dateTime === 'string' ? dateTime : (dateTime as Date).toISOString();
  
      // Faire la requête GET vers votre endpoint Spring Boot
      return this.http.get<boolean>(`${this.eventbaseUrl}/getByDateTime/${isoDateTime}`);
    }

    getEventsByCategory(category : string) : Observable<any> {
      return this.http.get<any>(`${this.eventbaseUrl}/${category}`);
    }

    getEventsByTicketPriceAsc() : Observable<any> {
      return this.http.get<any>(`${this.eventbaseUrl}/byTicketPriceAsc`);
    }

    getEventsByTicketPriceDesc() : Observable<any> {
      return this.http.get<any>(`${this.eventbaseUrl}/byTicketPriceDesc`);
    }

    getEventsByCategoryTicketPriceAsc(category : string) : Observable<any> {
      return this.http.get<any>(`${this.eventbaseUrl}/${category}/byTicketPriceAsc`);
    }

    getEventsByCategoryTicketPriceDesc(category : string) : Observable<any> {
      return this.http.get<any>(`${this.eventbaseUrl}/${category}/byTicketPriceDesc`);
    }

     private EmailbaseUrl = 'http://localhost:8089/api/v1/email';

    sendEmail(to: string, subject: string, body: string): Observable<any> {
      const emailData = {
        to: to,
        subject: subject,
        body: body
      };
      return this.http.post<any>(`${this.EmailbaseUrl}/sendEmail`,emailData)
    }
  
    
    EventUpdate !: Event;
}
