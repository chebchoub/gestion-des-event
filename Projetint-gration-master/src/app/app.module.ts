import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from 'src/register/register.component';
import { LoginComponent } from 'src/login/login.component';
import { HomeComponent } from './home/home.component';
import { TypeselectComponent } from './typeselect/typeselect.component';
import { LocationEventConfirenceComponent } from './location-event-confirence/location-event-confirence.component';
import { LocationEventArtistiquesComponent } from './location-event-artistiques/location-event-artistiques.component';
import { LocationEventSportifComponent } from './location-event-sportif/location-event-sportif.component';
import { EventFormInformationComponent } from './event-form-information/event-form-information.component';
import { MyeventsComponent } from './myevents/myevents.component';
import { DatePipe , Location } from '@angular/common';
import { UpdateEventComponent } from './update-event/update-event.component';
import { AlleventComponent } from './allevent/allevent.component';
import { EventdetailleComponent } from './eventdetaille/eventdetaille.component';
import { Eventdetail2Component } from './eventdetail2/eventdetail2.component';
import { PaymentComponentComponent } from './payment-component/payment-component.component';
import { ConfirmPaymentComponentComponent } from './confirm-payment-component/confirm-payment-component.component';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent ,
    LoginComponent,
    HomeComponent,
    TypeselectComponent,
    LocationEventConfirenceComponent,
    LocationEventArtistiquesComponent,
    LocationEventSportifComponent,
    EventFormInformationComponent,
    MyeventsComponent,
    UpdateEventComponent,
    AlleventComponent,
    EventdetailleComponent,
    Eventdetail2Component,
    PaymentComponentComponent,
    ConfirmPaymentComponentComponent,
    FormInscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,  
    
    NgChartsModule

  ],
  providers: [DatePipe,Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
