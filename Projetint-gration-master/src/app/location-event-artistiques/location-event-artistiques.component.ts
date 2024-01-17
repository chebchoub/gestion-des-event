import { Component, Input, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-event-artistiques',
  templateUrl: './location-event-artistiques.component.html',
  styleUrls: ['./location-event-artistiques.component.css']
})
export class LocationEventArtistiquesComponent implements OnInit{

  locationInput :string;
  constructor(private userService: UserServiceService,private router:Router) {
    this.locationInput="";

   }

  gotomoreinforamtion(){
    this.router.navigate(['./EventFormInformationComponent']);
    this.userService.LocationInput=this.locationInput;
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
        position: { lat:36.81180144974292, lng: 10.185517059716847 }, // Coordonnées de Paris
        map: map,
      });

      // Crée le contenu HTML personnalisé pour l'infobulle
      const contentString =
      ' <div style="text-align: center;">' +
      '<img src="assets/img/Cité de la Culture.jpg" alt="Lieu" style="max-width: 300px; max-height: 300px;">' +
      '<div style="margin-top: 5px;">' +
      '<p>Cité de la Culture</p>' +
      '<p>Horaires: Ouvert 24h/24</p>' +
      '<p>Téléphone: 70028330</p>' +
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
        window.open('https://www.facebook.com/Citedelaculturetunis/photos/a.1200458890088516/1382889601845443/?locale=hi_IN&paipv=0&eav=AfYl8XaQ581MpJoNRLN2Ak1uBhLi9o7sIrL93ICes4oY5Em8oynQkiF0nY8fx4XllwY&_rdr        '); // Remplace par le lien souhaité
      });
      // Gestionnaire d'événement pour le retrait du curseur du marqueur (pour fermer l'infobulle)
      marker.addListener('mouseout', () => {
        infowindow.close();
      });
      //22222222222222222222222222222
      const marker1 = new google.maps.Marker({
        position: {lat: 36.800297190230076, lng: 10.181800269690896}, // Coordonnées de Paris
        map: map,
      });

      // Crée le contenu HTML personnalisé pour l'infobulle
      const contentString1 =
        ' <div style="text-align: center;">' +
        '<img src="assets/img/Cinéma Le Colisée, Avenue Habib Bourguiba, Tunis.jpg" alt="Lieu" style="max-width: 300px; max-height: 300px;">' +
        '<div style="margin-top: 5px;">' +
        '<p>Cinéma Le Colisée, Avenue Habib Bourguiba</p>' +
        '<p>Horaires: Ouvert 24h/24</p>' +
        '<p>Téléphone: 51809072</p>' +
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
        window.open('https://www.facebook.com/Cinema.Colisee.Tunis/'); // Remplace par le lien souhaité
      });
      // Gestionnaire d'événement pour le retrait du curseur du marqueur (pour fermer l'infobulle)
      marker1.addListener('mouseout', () => {
        infowindow1.close();
      });
      //333333333333333333333333333333333333333333333333
      const marker2 = new google.maps.Marker({
        position: {lat:36.80135837993056, lng:10.180924423673236}, // Coordonnées de Paris
        map: map,
      });

      // Crée le contenu HTML personnalisé pour l'infobulle
      const contentString2 =
        ' <div style="text-align: center;">' +
        '<img src="assets/img/Maison de la culture Ibn Rachiq.jpeg" alt="Lieu" style="max-width: 300px; max-height: 300px;">' +
        '<div style="margin-top: 5px;">' +
        '<p>SMaison de la culture Ibn Rachiq, Tunis</p>' +
        '<p>Horaires: Ouvert 24h/24</p>' +
        '<p>Téléphone : 71338952</p>' +
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
        window.open('https://www.facebook.com/ibnrachiq.Tunis/?locale=fr_FR'); // Remplace par le lien souhaité
      });
      // Gestionnaire d'événement pour le retrait du curseur du marqueur (pour fermer l'infobulle)
      marker2.addListener('mouseout', () => {
        infowindow2.close();
      });
      //33333333333333333333333333333333333
      const marker3= new google.maps.Marker({
        position: {lat:36.808073222188625, lng:10.181554929472906}, // Coordonnées de Paris
        map: map,
      });

      // Crée le contenu HTML personnalisé pour l'infobulle
      const contentString3 =
        ' <div style="text-align: center;">' +
        '<img src="assets/img/Westerwelle Startup Haus Tunis.jpg" alt="Lieu" style="max-width: 300px; max-height: 300px;">' +
        '<div style="margin-top: 5px;">' +
        '<p>Westerwelle Startup Haus Tunis</p>' +
        '<p>Horaires: Ouvert 24h/24</p>' +
        '<p>Téléphone :71247026</p>' +
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
        window.open('https://westerwelle-foundation.com/fr/locations/wsh-tunis/'); // Remplace par le lien souhaité
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
