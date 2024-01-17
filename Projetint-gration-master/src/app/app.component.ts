import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
  constructor(private router:Router,public serviceUser:UserServiceService ) {
  }
  gotoregsiter() {

    this.router.navigate(['./register']);
    console.log("test");
  }
  gotoLoing() {
  
    this.router.navigate(['./login']);
    console.log("test");
  }
  onLogoutClick() {
    this.router.navigate(['/LoginComponent']); // Redirigez vers la page de connexion après la déconnexion
    this.serviceUser.logout(); // Appel de la méthode logout du service d'authentification
    // Autres actions si nécessaire

  }

  
}
