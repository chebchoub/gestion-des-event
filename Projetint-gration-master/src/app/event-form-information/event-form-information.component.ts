import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Event as myEvent } from '../event';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Observable, catchError, map, of } from 'rxjs';
import { Router } from '@angular/router';
import { EventsServiceService } from '../events-service.service';
@Component({
  selector: 'app-event-form-information',
  templateUrl: './event-form-information.component.html',
  styleUrls: ['./event-form-information.component.css']
})
export class EventFormInformationComponent implements OnInit {

  eventName: string;
  category: string;
  location: string;
  dateTime: Date;
  description: string;
  ticketPrice: number;
  capacity: number;
  contactInformation: string;
  organizer: Observable<any>;
  imageUrl: string;
  dateActuelle = new Date();


  constructor(private userService: UserServiceService, private authService: AuthService, private router: Router, private eventService: EventsServiceService) {
    this.eventName = "";
    this.description = "";
    this.ticketPrice = 0;
    this.capacity = 0;
    this.contactInformation = "";
    this.dateTime = new Date();
    this.organizer = new Observable<any>;
    this.category = this.userService.CategoryInput;
    this.location = this.userService.LocationInput;
    this.imageUrl = this.imageEvent;

  }

  ngOnInit(): void {

  }
  isEventAvailable!: boolean;

  retrieveEvent(dateTime: Date): Observable<boolean> {
    return this.eventService.getEventByDateTime(dateTime)
      .pipe(
        map((result: boolean) => {
          console.log('Event found:', result);
          return result;
        }),
        catchError((error) => {
          console.error('Error fetching event:', error);
          return of(false); // En cas d'erreur, indiquez que l'événement n'existe pas
        })
      );
  }
  createEvent(): void {
    this.retrieveEvent(new Date(this.dateTime))
    .subscribe((eventExists: boolean) => {
      if (eventExists) {
        alert("Un événement existe déjà pour cette date et heure.");
        return
      } 
    let getuser = this.authService.getUserDetails();
    this.userService.getUserByEmail(getuser).subscribe(
      user => {
        this.organizer = user;
        console.log(parseFloat(this.ticketPrice.toString()));
        const e: myEvent = {
          eventName: this.eventName,
          category: this.category,
          dateTime: this.dateTime,
          location: this.location,
          description: this.description,
          ticketPrice: Number(this.ticketPrice),
          capacity: this.capacity,
          contactInformation: this.contactInformation,
          imageUrl: this.imageEvent
        };
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        console.log(new Date(this.dateTime));
        let dateActuelle = new Date();
        let dateDansDixJours = new Date();
        dateDansDixJours.setDate(dateActuelle.getDate() + 10);
        if (new Date(this.dateTime) < dateDansDixJours) {
          alert("Veuillez verifier la date date event >" + dateDansDixJours);
          return;
        } else

          if (this.eventName.length > 30) {
            alert("Veuillez verifier le nom de event maximum 30 caratére");
            return;
          } else
            if (Number(this.ticketPrice) < 10 || Number(this.ticketPrice) > 100  ) {
              alert("Veuillez verifier le prix de ticket supérieur 10 dt");
              return;
            } else
              if (this.capacity < 20 || this.capacity > 200) {
                alert("Veuillez verifier le capacity supérieur 20 pérsonne");
                return;
              } else
                if (!emailRegex.test(this.contactInformation)) {
                  alert("Veuillez saisir une adresse e-mail valide ou un numéro de téléphone valide.");
                  return; // Arrête l'exécution si l'entrée ne correspond ni à un email ni à un numéro de téléphone
                } if (
          this.eventName.length === 0 ||
          !this.dateTime ||
          this.description.length === 0 ||
          !this.ticketPrice ||
          !this.capacity ||
          this.contactInformation.length === 0
        ) {
          alert("Veuillez remplir tous les champs pour créer un événement.");
          return;
        }
        const emailSubject = `Confirmation de création d'événement : ${this.eventName}`;
        const emailBody = `
  
                                  Bonjour, Vous avez créé un nouvel événement. Voici les détails :
                                  Nom de l'événement : ${this.eventName}
                                  Catégorie : ${this.category}
                                  Lieu : ${this.location}
                                  Date et heure : ${this.dateTime}
                                  Description : ${this.description}
                                  Prix des billets : ${this.ticketPrice} euros
                                  Capacité : ${this.capacity} personnes
                                  Informations de contact : ${this.contactInformation}
                                
                                  Date de création de l'événement : ${dateActuelle.toISOString()}
                                
                                  Nous vous remercions pour votre confiance dans notre application de gestion d'événements.
                                
                                  N'hésitez pas à nous contacter pour toute question supplémentaire ou pour plus d'informations :
                                  
                                  - Par e-mail à : alichabchoub919@gmail.com
                                  - Par téléphone au : +(216)55624099
                                
                                  Cordialement,
                                  L'équipe Eventi
                                  `;
        this.eventService.createEvents(e, getuser).subscribe(
          (response) => {

            this.router.navigate(["/MyEventsComponent"])
            this.sendEmail(this.contactInformation, emailSubject, emailBody)
          },
          (error) => {
            this.router.navigate(["/MyEventsComponent"])
            this.sendEmail(this.contactInformation, emailSubject, emailBody)

          }

        );


      },
      error => {
        this.router.navigate(['./MyEventsComponent'])
      }
    );
    });


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
  eventFile: any;
  imageEvent: string = "";
  onSelectFile(event: any) {

    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (innerEvent: any) => {
        console.log(innerEvent.target.result);
        this.imageEvent = innerEvent.target.result;
      }
    }
  }

}
