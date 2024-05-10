import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { EventsServiceService } from '../events-service.service';
import { Event as myEvent } from '../event';
import { Location } from '@angular/common';
import { CommandeServiceService } from '../commande-service.service';

@Component({
  selector: 'app-eventdetail2',
  templateUrl: './eventdetail2.component.html',
  styleUrls: ['./eventdetail2.component.css']
})
export class Eventdetail2Component {
  constructor(private commandeService: CommandeServiceService, private location: Location, private routeAct: ActivatedRoute, private eventService: EventsServiceService, private authService: AuthService, private datePipe: DatePipe, private router: Router) { }
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
  Listecommandes: any[] = [];
  name!: string; 
  dates: string[] = [];
  nbrTickets: number[] = [];
  getFormattedDate(date: Date): string {
    return this.datePipe.transform(date, 'dd/MM/yyyy') || '';
  }
  ngOnInit() {

    this.name = this.routeAct.snapshot.params['nameEvent'];
    this.eventService.getEventByname(this.name).subscribe(data => {
      this.event = data;
    })
    this.commandeService.getAllCommandesByEvent(this.name).subscribe(
      commandes => {
        this.Listecommandes = commandes;
        console.log('Commandes par événement:', commandes);

        const ticketsParDate: { [key: string]: number } = {};

        this.Listecommandes.forEach(commande => {
          const dateCommande = this.getFormattedDate(commande.date);

          if (!ticketsParDate[dateCommande]) {
            ticketsParDate[dateCommande] = 0;
          }

          ticketsParDate[dateCommande] += commande.nbrTicket;
        });

        // Afficher les résultats
        Object.keys(ticketsParDate).forEach(date => {
          console.log(`${date} = ${ticketsParDate[date]} ticket(s)`);
        });

        // Mise à jour du graphique (si nécessaire)
     

      },
      error => {
        console.error('Erreur lors de la récupération des commandes par événement', error);
        // Gérez l'erreur ici
      }
    );

  }

  updateEvent(event: any) {
    const eventId = event._id;

    // Naviguer vers le composant avec l'ID (facultatif)
    this.router.navigate(['./UpdateEventComponent', eventId]);

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
  deleteEvent(event: any) {
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
        this.router.navigate(['./MyEventsComponent']);

      },
      (error) => {
        console.error('Error deleting event:', error);
        // Handle errors or show error messages to the user.
      }
    );;
  }
}
