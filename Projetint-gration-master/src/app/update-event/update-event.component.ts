import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event as myEvent } from '../event';
import { UserServiceService } from '../user-service.service';
import { EventsServiceService } from '../events-service.service';
import { DatePipe } from '@angular/common';
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

  constructor(private datePipe: DatePipe, private authService: AuthService, private routeAct: ActivatedRoute, private router: Router, private userService: UserServiceService, private eventService: EventsServiceService) {

  }
  event: myEvent = {
    eventName: '',
    category: '',
    dateTime: new Date(),
    location: '',
    description: '',
    ticketPrice: 0,
    capacity: 0,
    contactInformation: '',
    imageUrl: ''
  };
  id!: string;
  date!: string;
  date1!: string;

  ngOnInit() {
    this.id = this.routeAct.snapshot.params['eventId'];
    console.log(this.id);

    this.eventService.getEventById(this.id).subscribe(data => {
      this.event = data;
      console.log(this.event);
      this.imageEvent = this.event.imageUrl;
      this.date = this.getFormattedDate(this.event.dateTime);

    })

  }
  getFormattedDate(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }
  
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
  updateEvent(): void {

    let getuser = this.authService.getUserDetails();

    if (this.event.imageUrl != this.imageEvent) {
      if (this.event.eventName.length > 30) {
        alert("Veuillez verifier le nom de event maximum 30 caratére");
        return;
      }
      // Obtenir la date actuelle
      let dateActuelle = new Date();
      // Ajouter 10 jours à la date actuelle
      let dateDansDixJours = new Date();
      dateDansDixJours.setDate(dateActuelle.getDate() + 10);
      console.log(this.event.dateTime);

      // Vérifier si la date est valide et supérieure à la date actuelle + 10 jours
      if (new Date(this.event.dateTime) < dateDansDixJours) {
        alert("Veuillez verifier la date date event >" + dateDansDixJours);
        return;
      }
      if (Number(this.event.ticketPrice) < 10) {
        alert("Veuillez verifier le prix de ticket supérieur 10 dt");
        return;
      }
      if (this.event.capacity < 20) {
        alert("Veuillez verifier le capacity supérieur 20 pérsonne");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\+\(\d{3}\)\d{8}$/; // Vous pouvez adapter cette expression régulière selon votre format de numéro

      if (!emailRegex.test(this.event.contactInformation) && !phoneRegex.test(this.event.contactInformation)) {
        alert("Veuillez saisir une adresse e-mail valide ou un numéro de téléphone valide.");
        return; // Arrête l'exécution si l'entrée ne correspond ni à un email ni à un numéro de téléphone
      }
      if (
        this.event.eventName.length === 0 ||
        this.event.category.length === 0 ||
        this.event.location.length === 0 ||
        !this.event.dateTime ||
        this.event.description.length === 0 ||
        !this.event.ticketPrice ||
        !this.event.capacity ||
        this.event.contactInformation.length === 0
      ) {
        alert("Veuillez remplir tous les champs pour créer un événement.");
        return;
      }
      const e: myEvent = {
        eventName: this.event.eventName,
        category: this.event.category,
        dateTime: this.event.dateTime,
        location: this.event.location,
        description: this.event.description,
        ticketPrice: this.event.ticketPrice,
        capacity: this.event.capacity,
        contactInformation: this.event.contactInformation,
        imageUrl: this.imageEvent
      };

      this.eventService.updateEvent(e, this.id, getuser).subscribe(
        (response) => {
          this.router.navigate(['./MyEventsComponent'])
          // Navigate to the desired route
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.retrieveEvent(new Date(this.event.dateTime))
        .subscribe((eventExists: boolean) => {
          if (eventExists) {
            alert("Un événement existe déjà pour cette date et heure.");
          } else {
            if (this.event.eventName.length > 30) {
              alert("Veuillez verifier le nom de event maximum 30 caratére");
              return;
            }
            // Obtenir la date actuelle
            let dateActuelle = new Date();

            // Ajouter 10 jours à la date actuelle
            let dateDansDixJours = new Date();
            dateDansDixJours.setDate(dateActuelle.getDate() + 10);
            console.log(new Date(this.event.dateTime));

            // Vérifier si la date est valide et supérieure à la date actuelle + 10 jours
            if (new Date(this.event.dateTime) <= dateDansDixJours) {
              alert("Veuillez verifier la date date event >" + dateDansDixJours);
              return;
            }
            if (Number(this.event.ticketPrice) < 10) {
              alert("Veuillez verifier le prix de ticket supérieur 10 dt");
              return;
            }
            if (this.event.capacity < 20) {
              alert("Veuillez verifier le capacity supérieur 20 pérsonne");
              return;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^\+\(\d{3}\)\d{8}$/; // Vous pouvez adapter cette expression régulière selon votre format de numéro

            if (!emailRegex.test(this.event.contactInformation) && !phoneRegex.test(this.event.contactInformation)) {
              alert("Veuillez saisir une adresse e-mail valide ou un numéro de téléphone valide.");
              return; // Arrête l'exécution si l'entrée ne correspond ni à un email ni à un numéro de téléphone
            }
            if (
              this.event.eventName.length === 0 ||
              this.event.category.length === 0 ||
              this.event.location.length === 0 ||
              !this.event.dateTime ||
              this.event.description.length === 0 ||
              !this.event.ticketPrice ||
              !this.event.capacity ||
              this.event.contactInformation.length === 0
            ) {
              alert("Veuillez remplir tous les champs pour créer un événement.");
              return;
            }
            const e: myEvent = {
              eventName: this.event.eventName,
              category: this.event.category,
              dateTime: this.event.dateTime,
              location: this.event.location,
              description: this.event.description,
              ticketPrice: this.event.ticketPrice,
              capacity: this.event.capacity,
              contactInformation: this.event.contactInformation,
              imageUrl: this.event.imageUrl
            };
            const emailSubject = `Confirmation de mdification d'événement : ${this.event.eventName}`;
            const emailBody = `
                                      Bonjour, Vous avez modifier un nouvel événement. Voici les détails :
                                      Nom de l'événement : ${this.event.eventName}
                                      Catégorie : ${this.event.category}
                                      Lieu : ${this.event.location}
                                      Date et heure : ${this.event.dateTime}
                                      Description : ${this.event.description}
                                      Prix des billets : ${this.event.ticketPrice} euros
                                      Capacité : ${this.event.capacity} personnes
                                      Informations de contact : ${this.event.contactInformation}
                                    
                                      Date de création de l'événement : ${dateActuelle.toISOString()}
                                    
                                      Nous vous remercions pour votre confiance dans notre application de gestion d'événements.
                                    
                                      N'hésitez pas à nous contacter pour toute question supplémentaire ou pour plus d'informations :
                                      
                                      - Par e-mail à : alichabchoub919@gmail.com
                                      - Par téléphone au : +(216)55624099
                                      Cordialement,
                                      L'équipe Eventi
                                      `;
            this.eventService.updateEvent(e, this.id, getuser).subscribe(
              (response) => {
                this.router.navigate(['./MyEventsComponent']);
                this.sendEmail(this.event.contactInformation, emailSubject, emailBody)

                // Navigate to the desired route
              },
              (error) => {
                console.log(error);
              }
            );
          }
        });
    }
  }


  imageEvent: string = "";
  onSelectFile(event: any) {

    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (innerEvent: any) => {
        this.imageEvent = innerEvent.target.result;
      }
    }
  }
}
