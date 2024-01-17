import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsServiceService } from '../events-service.service';
import { AuthService } from '../auth.service';
import { DatePipe } from '@angular/common';
import { Location } from '@angular/common';
import { User } from '../user';
import { Observable } from 'rxjs';
import { UserServiceService } from '../user-service.service';
import { CommandeServiceService } from '../commande-service.service';

@Component({
  selector: 'app-form-inscription',
  templateUrl: './form-inscription.component.html',
  styleUrls: ['./form-inscription.component.css']
})
export class FormInscriptionComponent implements OnInit {
  
  constructor(private  commandeService: CommandeServiceService,private location: Location, private userService : UserServiceService,private routeAct: ActivatedRoute, private eventService: EventsServiceService, private authService: AuthService, private datePipe: DatePipe, private router: Router) { 

  }
  nomPartcipant:string="";
  prenomParticpant:string="";
  contactParticipant:string="";
   totalprice:number=0;
   nbrTicket:number=1;
   eventName:string="";

  ngOnInit(): void {
    this.totalprice=this.routeAct.snapshot.params['ticketPrice'];
    this.eventName=this.routeAct.snapshot.params['eventNmae'];
    console.log(this.totalprice)
    this.getuser();
    
  }

  inscrire():void
  {  
    const currentDate = new Date();

    const commandeData = {
      nomPartcipant: this.nomPartcipant,
      prenomParticpant: this.prenomParticpant      ,
      contactParticipant: this.contactParticipant,
      nbrTicket: this.nbrTicket,
      date: currentDate
      // Ajoutez d'autres champs du formulaire si nécessaire
    };
    console.log(commandeData)
    this.commandeService.createCommande(commandeData,this.eventName).subscribe(
      response => {
        // Gérez la réponse réussie ici, par exemple, redirigez l'utilisateur ou affichez un message de succès
        console.log('Commande créée avec succès', response);
      },
      error => {
        // Gérez les erreurs ici, par exemple, affichez un message d'erreur à l'utilisateur
        console.error('Erreur lors de la création de la commande', error);
      }
    );
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.contactParticipant)) {
      alert("Veuillez saisir une adresse e-mail valide ou un numéro de téléphone valide.");
      return; // Arrête l'exécution si l'entrée ne correspond ni à un email ni à un numéro de téléphone
    }

        this.totalprice=this.nbrTicket*this.totalprice;
        console.log(this.totalprice)
        const emailSubject = `Confirmation d'inscription à l'événement ${this.eventName}`;
    const emailBody = `Bonjour Vous vous êtes inscrit à l'événement  ${this.eventName}
    Merci pour votre participation !
     
    N'hésitez pas à nous contacter pour toute question supplémentaire ou pour plus d'informations :
                                  
    - Par e-mail à : alichabchoub919@gmail.com
    - Par téléphone au : +(216)55624099
  
    Cordialement,
    L'équipe Eventi
                              `;
          this.sendEmail(this.contactParticipant, emailSubject, emailBody)
        this.NavigateToPayment(this.totalprice)
      
  }
  getuser():void
  {
    let getuser = this.authService.getUserDetails();
    this.userService.getUserByEmail(getuser).subscribe(
      user => {
        this.nomPartcipant=user.nom;
        this.prenomParticpant=user.prenom;
        this.contactParticipant=user.email;
      });

  }
  NavigateToPayment(ticketPrice : number){
    this.router.navigate(['./PaymentComponentComponent',ticketPrice])
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
}
