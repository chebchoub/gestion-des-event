import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { EventsServiceService } from '../events-service.service';
import { Event as myEvent } from '../event';
import { Location } from '@angular/common';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-eventdetaille',
  templateUrl: './eventdetaille.component.html',
  styleUrls: ['./eventdetaille.component.css']
})
export class EventdetailleComponent implements OnInit {
  constructor(private location: Location, private routeAct: ActivatedRoute, private userService: UserServiceService, private eventService: EventsServiceService, private authService: AuthService, private datePipe: DatePipe, private router: Router) { }
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
  name!: string;
  getFormattedDate(date: Date): string {
    return this.datePipe.transform(date, 'dd/MM/yyyy') || '';
  }
  ngOnInit() {
    this.name = this.routeAct.snapshot.params['nameEvent'];
    this.eventService.getEventByname(this.name).subscribe(data => {
      this.event = data;

      console.log(this.event);
    })
  }
  gotoform(ticketPrice: number, eventNmae: string) {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['./FormInscriptionComponent', ticketPrice, eventNmae])

     }
     else
     {
      this.router.navigate(['./LoginComponent'])

     }
  }

}
