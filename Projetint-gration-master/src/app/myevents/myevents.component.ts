import { Component, OnInit } from '@angular/core';
import { EventsServiceService } from '../events-service.service';
import { AuthService } from '../auth.service';
import { Event as myEvent } from '../event';
import { DatePipe, Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-myevents',
  templateUrl: './myevents.component.html',
  styleUrls: ['./myevents.component.css']
})
export class MyeventsComponent implements OnInit {

  constructor(private location: Location , private eventService : EventsServiceService , private authService : AuthService,private datePipe: DatePipe , private router : Router){
  }
  ngOnInit(): void {
    this.getEventsByUser();
  }
  getFormattedDate(date : Date): string {
    return this.datePipe.transform(date, 'dd/MM/yyyy') || '';
  }
  Events : myEvent[] = [];
  getEventsByUser() : void{
    let getuser = this.authService.getUserDetails();
    this.eventService.getEventsByUser(getuser).subscribe((data) => {
      this.Events = data;
      console.log(this.Events+getuser);
  }
)}

  updateEvent(event : any){
    const eventId = event._id;

    // Naviguer vers le composant avec l'ID (facultatif)
    this.router.navigate(['./UpdateEventComponent',eventId]);

    // Afficher l'ID dans la console
  }
  to: String = "";
  subject: String = "";
  body: String = "";
  sendEmail(toEmail: string, subjectEmail: string, bodyEmail: string): void {
    const to = toEmail;
    const subject = subjectEmail;
    const body = bodyEmail;

    this.eventService.sendEmail(to, subject, body).subscribe(
      response => {
        console.log('Email sent successfully:', response);
      },
      error => {
        console.error('Error sending email:', error);
        // Handle error, if needed
      }
    );
  }
  deleteEvent(event : any){
    console.log(event._id);
    let dateActuelle = new Date();
    const emailSubject = `Confirmation suppression d'événement : ${event.eventName}`;
    const emailBody = `
                              Bonjour, Vous avez supprimer un  événement. Voici les détails :
                              Nom de l'événement : ${event.eventName}
                              Catégorie : ${event.category}
                              Lieu : ${event.location}
                              Date et heure : ${event.dateTime}
                              Description : ${event.description}
                              Prix des billets : ${event.ticketPrice} euros
                              Capacité : ${event.capacity} personnes
                              Informations de contact : ${event.contactInformation}
                            
                              Date de création de l'événement : ${dateActuelle.toISOString()}
                            
                              Nous vous remercions pour votre confiance dans notre application de gestion d'événements.
                            
                              N'hésitez pas à nous contacter pour toute question supplémentaire ou pour plus d'informations :
                              
                              - Par e-mail à : alichabchoub919@gmail.com
                              - Par téléphone au : +(216)55624099
                              Cordialement,
                              L'équipe Eventi
                              `;
    this.eventService.deleteEvent(event._id).subscribe(
      (response) => {
        console.log('Event deleted successfully:', response);
        this.sendEmail(event.contactInformation, emailSubject, emailBody)

        window.location.reload();
      },
      (error) => {
        console.error('Error deleting event:', error);
        // Handle errors or show error messages to the user.
      }
    );;
  }
  go(nameEvent:string):void
  {
    this.router.navigate(['./Eventdetail2Component',nameEvent]);
  }
}
