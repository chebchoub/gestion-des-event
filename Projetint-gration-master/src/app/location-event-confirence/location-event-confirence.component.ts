import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Loader } from '@googlemaps/js-api-loader';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-event-confirence',
  templateUrl: './location-event-confirence.component.html',
  styleUrls: ['./location-event-confirence.component.css']
})
export class LocationEventConfirenceComponent implements OnInit {
  locationInput:string="";
  constructor(private userService: UserServiceService,private router:Router) { }

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
          position: { lat: 36.805889467808406, lng: 10.186784896229746 }, // Coordonnées de Paris
          map: map,
        });

        // Crée le contenu HTML personnalisé pour l'infobulle
        const contentString =
        ' <div style="text-align: center;">' +
        '<img src="assets/img/Palais des Congrès - قصر المؤتمرات.jpg" alt="Lieu" style="max-width: 300px; max-height: 300px;">' +
        '<div style="margin-top: 5px;">' +
        '<p>Palais des Congrès - قصر المؤتمرات</p>' +
        '<p>Horaires: Ouvert 24h/24</p>' +
        '<p>Téléphone : 71 335 533</p>' +
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
          window.open('https://ar.wikipedia.org/wiki/%D9%82%D8%B5%D8%B1_%D8%A7%D9%84%D9%85%D8%A4%D8%AA%D9%85%D8%B1%D8%A7%D8%AA_%D8%A8%D8%AA%D9%88%D9%86%D8%B3'); // Remplace par le lien souhaité
        });
        // Gestionnaire d'événement pour le retrait du curseur du marqueur (pour fermer l'infobulle)
        marker.addListener('mouseout', () => {
          infowindow.close();
        });
        //22222222222222222222222222222
        const marker1 = new google.maps.Marker({
          position: {lat: 36.833025029394484, lng:10.186484567394944}, // Coordonnées de Paris
          map: map,
        });

        // Crée le contenu HTML personnalisé pour l'infobulle
        const contentString1 =
          ' <div style="text-align: center;">' +
          '<img src="assets/img/CICT CENTRE INTERNATIONAL DES CONGRES DE TUNIS L’UTIC.jpg" alt="Lieu" style="max-width: 300px; max-height: 300px;">' +
          '<div style="margin-top: 5px;">' +
          '<p>CICT CENTRE INTERNATIONAL DES CONGRES DE TUNIS L’UTIC</p>' +
          '<p>Horaires: Ouvert 24h/24</p>' +
          '<p>Téléphone: 97 879 445</p>' +
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
          window.open('https://fr.wikipedia.org/wiki/Palais_des_congr%C3%A8s_de_Tunis'); // Remplace par le lien souhaité
        });
        // Gestionnaire d'événement pour le retrait du curseur du marqueur (pour fermer l'infobulle)
        marker1.addListener('mouseout', () => {
          infowindow1.close();
        });
        //333333333333333333333333333333333333333333333333
        const marker2 = new google.maps.Marker({
          position: {lat:36.806529472245394, lng:10.071705565540702}, // Coordonnées de Paris
          map: map,
        });

        // Crée le contenu HTML personnalisé pour l'infobulle
        const contentString2 =
          ' <div style="text-align: center;">' +
          '<img src="assets/img/manouba.jpg" alt="Lieu" style="max-width: 300px; max-height: 300px;">' +
          '<div style="margin-top: 5px;">' +
          '<p>Salle des Conférences, Technopôle Manouba</p>' +
          '<p>Horaires: Ouvert 24h/24</p>' +
          '<p>Téléphone : 22 773 481</p>' +
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
          window.open('https://www.facebook.com/p/Salle-de-conf%C3%A9rence-Technopole-Manouba-100067489957251/?locale=ar_AR&paipv=0&eav=AfYBsuHasULGE4pzDwmmo3cwxaGPrQxa3tA8cTyLfEqFXv8cAJE4dt-iSVYloKVh6yQ&_rdr'); // Remplace par le lien souhaité
        });
        // Gestionnaire d'événement pour le retrait du curseur du marqueur (pour fermer l'infobulle)
        marker2.addListener('mouseout', () => {
          infowindow2.close();
        });
        //33333333333333333333333333333333333
        const marker3= new google.maps.Marker({
          position: {lat:36.84151691205506, lng:10.194089999017203}, // Coordonnées de Paris
          map: map,
        });

        // Crée le contenu HTML personnalisé pour l'infobulle
        const contentString3 =
          ' <div style="text-align: center;">' +
          '<img src="assets/img/Salle des Séminaires.jpg" alt="Lieu" style="max-width: 300px; max-height: 300px;">' +
          '<div style="margin-top: 5px;">' +
          '<p>Salle des Séminaires</p>' +
          '<p>Horaires: Ouvert 24h/24</p>' +
          '<p>Téléphone :  71 872 600</p>' +
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
          window.open('https://www.facebook.com/p/Salle-de-conf%C3%A9rence-Technopole-Manouba-100067489957251/?locale=ar_AR&paipv=0&eav=AfYBsuHasULGE4pzDwmmo3cwxaGPrQxa3tA8cTyLfEqFXv8cAJE4dt-iSVYloKVh6yQ&_rdr'); // Remplace par le lien souhaité
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
