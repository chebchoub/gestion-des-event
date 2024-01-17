import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-location-event-sportif',
  templateUrl: './location-event-sportif.component.html',
  styleUrls: ['./location-event-sportif.component.css']
})
export class LocationEventSportifComponent implements OnInit {

  @Input() categoryInput:string= "";
  locationInput:string="";
  constructor(private userService: UserServiceService,private router:Router) {
  }

  gotomoreinforamtion(){
    this.router.navigate(['./EventFormInformationComponent']);
    this.userService.LocationInput= this.locationInput;
  }

  ngOnInit(): void {
    const mapElement = document.getElementById('map');
    if (mapElement) {
      const loader = new Loader({
        apiKey: 'AIzaSyCgs2j7tlDxOduzeZ0FMdscYVVWLNWCYuQ'
      });

      loader.load().then(() => {
        const map = new google.maps.Map(mapElement, {
          center: { lat: 36.8065, lng: 10.1815 }, // Coordonnées de Tunis
          zoom: 12
        });

        const marker = new google.maps.Marker({
          position: { lat: 36.81526307805949, lng: 10.127807781343277 }, // Coordonnées de Paris
          map: map,
        });

        // Crée le contenu HTML personnalisé pour l'infobulle
        const contentString =
        ' <div style="text-align: center;">' +
        '<img src="assets/img/California GYM BARDO.jpg" alt="Lieu" style="max-width: 300px; max-height: 300px;">' +
        '<div style="margin-top: 5px;">' +
        '<p>California GYM BARDO</p>' +
        '<p>Horaires: Ouvert 24h/24</p>' +
        '<p>Téléphone : 36 013 042</p>' +
        '</div>' +
        '</div>';

        const infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        // Gestionnaire d'événement pour le survol du marqueur
        marker.addListener('mouseover', () => {
          infowindow.open(map, marker);
        });
        marker.addListener('click', () => {
          window.open('https://www.california-gym.com/'); // Remplace par le lien souhaité
        });
        // Gestionnaire d'événement pour le retrait du curseur du marqueur (pour fermer l'infobulle)
        marker.addListener('mouseout', () => {
          infowindow.close();
        });
        //22222222222222222222222222222
        const marker1 = new google.maps.Marker({
          position: {lat: 36.807393422692435, lng:10.121042308334214}, // Coordonnées de Paris
          map: map,
        });

        // Crée le contenu HTML personnalisé pour l'infobulle
        const contentString1 =
          ' <div style="text-align: center;">' +
          '<img src="assets/img/RED SQUARE BARDO.jpg" alt="Lieu" style="max-width: 300px; max-height: 300px;">' +
          '<div style="margin-top: 5px;">' +
          '<p>RED SQUARE BARDO</p>' +
          '<p>Horaires: Ouvert 24h/24</p>' +
          '<p>Téléphone: 71583517</p>' +
          '</div>' +
          '</div>';

        const infowindow1 = new google.maps.InfoWindow({
          content: contentString1
        });

        // Gestionnaire d'événement pour le survol du marqueur
        marker1.addListener('mouseover', () => {
          infowindow1.open(map, marker1);
        });
        marker1.addListener('click', () => {
          window.open('http://www.redsquare.tn/'); // Remplace par le lien souhaité
        });
        // Gestionnaire d'événement pour le retrait du curseur du marqueur (pour fermer l'infobulle)
        marker1.addListener('mouseout', () => {
          infowindow1.close();
        });
        //333333333333333333333333333333333333333333333333
        const marker2 = new google.maps.Marker({
          position: {lat:36.80695814560763, lng:10.133450839012632}, // Coordonnées de Paris
          map: map,
        });

        // Crée le contenu HTML personnalisé pour l'infobulle
        const contentString2 =
          ' <div style="text-align: center;">' +
          '<img src="assets/img/4FIT.png" alt="Lieu" style="max-width: 300px; max-height: 300px;">' +
          '<div style="margin-top: 5px;">' +
          '<p>4FIT</p>' +
          '<p>Horaires: Ouvert 24h/24</p>' +
          '<p>Téléphone : 55 588 840</p>' +
          '</div>' +
          '</div>';

        const infowindow2 = new google.maps.InfoWindow({
          content: contentString2
        });

        // Gestionnaire d'événement pour le survol du marqueur
        marker2.addListener('mouseover', () => {
          infowindow2.open(map, marker2);
        });
        marker2.addListener('click', () => {
          window.open('https://www.facebook.com/4FIT.TUNISIA/?locale=fr_FR'); // Remplace par le lien souhaité
        });
        // Gestionnaire d'événement pour le retrait du curseur du marqueur (pour fermer l'infobulle)
        marker2.addListener('mouseout', () => {
          infowindow2.close();
        });
        //33333333333333333333333333333333333
        const marker3= new google.maps.Marker({
          position: {lat:36.810660318150674, lng:10.141249081343119}, // Coordonnées de Paris
          map: map,
        });

        // Crée le contenu HTML personnalisé pour l'infobulle
        const contentString3 =
          ' <div style="text-align: center;">' +
          '<img src="assets/img/mygym.jpg" alt="Lieu" style="max-width: 300px; max-height: 300px;">' +
          '<div style="margin-top: 5px;">' +
          '<p>My Gym bardo</p>' +
          '<p>Horaires: Ouvert 24h/24</p>' +
          '<p>Téléphone :  55 028 028</p>' +
          '</div>' +
          '</div>';

        const infowindow3 = new google.maps.InfoWindow({
          content: contentString3
        });

        // Gestionnaire d'événement pour le survol du marqueur
        marker3.addListener('mouseover', () => {
          infowindow3.open(map, marker3);
        });
        marker3.addListener('click', () => {
          window.open('https://www.my-gym.tn/'); // Remplace par le lien souhaité
        });
        // Gestionnaire d'événement pour le retrait du curseur du marqueur (pour fermer l'infobulle)
        marker3.addListener('mouseout', () => {
          infowindow3.close();
        });

      });
    } else {
      console.error('L\'élément avec l\'ID "map" est introuvable.');
    }
  }
}
