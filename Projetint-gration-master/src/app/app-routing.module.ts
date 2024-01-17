import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/login/login.component';
import { RegisterComponent } from 'src/register/register.component';
import { HomeComponent } from './home/home.component';
import { TypeselectComponent } from './typeselect/typeselect.component';
import { LocationEventConfirenceComponent } from './location-event-confirence/location-event-confirence.component';
import { LocationEventArtistiquesComponent } from './location-event-artistiques/location-event-artistiques.component';
import { LocationEventSportifComponent } from './location-event-sportif/location-event-sportif.component';
import { EventFormInformationComponent } from './event-form-information/event-form-information.component';
import { MyeventsComponent } from './myevents/myevents.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { AlleventComponent } from './allevent/allevent.component';
import { EventdetailleComponent } from './eventdetaille/eventdetaille.component';
import { Eventdetail2Component } from './eventdetail2/eventdetail2.component';
import { PaymentComponentComponent } from './payment-component/payment-component.component';
import { ConfirmPaymentComponentComponent } from './confirm-payment-component/confirm-payment-component.component';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirige le chemin vide vers 'home'
  { path: 'home', component: HomeComponent},

  { path: 'RegisterComponent', component: RegisterComponent },
  { path: 'LoginComponent', component: LoginComponent },

  { path: 'TypeselectComponent', component: TypeselectComponent },
  { path: 'LocationEventConfirenceComponent', component: LocationEventConfirenceComponent },
  { path: 'LocationEventArtistiquesComponent', component: LocationEventArtistiquesComponent },

  { path: 'LocationEventSportifComponent', component: LocationEventSportifComponent },
  { path: 'EventFormInformationComponent', component: EventFormInformationComponent },
  { path: 'MyEventsComponent', component: MyeventsComponent },
  { path: 'UpdateEventComponent/:eventId', component: UpdateEventComponent },
  { path: 'AlleventComponent', component: AlleventComponent },
  { path: 'EventdetailleComponent/:nameEvent', component: EventdetailleComponent },
  { path: 'Eventdetail2Component/:nameEvent', component: Eventdetail2Component },
  { path: 'PaymentComponentComponent/:ticketPrice', component: PaymentComponentComponent },
  { path: 'ConfirmPaymentComponentComponent', component: ConfirmPaymentComponentComponent },
  { path: 'FormInscriptionComponent/:ticketPrice/:eventNmae', component: FormInscriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
