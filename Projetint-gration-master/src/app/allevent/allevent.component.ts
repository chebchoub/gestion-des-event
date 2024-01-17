import { Component } from '@angular/core';
import { EventsServiceService } from '../events-service.service';
import { AuthService } from '../auth.service';
import { Event as myEvent } from '../event';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-allevent',
  templateUrl: './allevent.component.html',
  styleUrls: ['./allevent.component.css']
})
export class AlleventComponent {

  constructor(private location: Location, private eventService: EventsServiceService, private authService: AuthService, private datePipe: DatePipe, private router: Router) {
    
  }
  ngOnInit(): void {
    this.getEvents();
  }
  go(nameEvent: string): void {
    
    this.router.navigate(['./EventdetailleComponent', nameEvent]);
  }
  showAscButton = true;
showDescButton = false;


  getFormattedDate(date: Date): string {
    return this.datePipe.transform(date, 'dd/MM/yyyy') || '';
  }
  events: myEvent[] = [];
  getEvents(): void {
    this.eventService.getEvents().subscribe((data) => {
      this.events = data;
      console.log(this.events);
      this.category="all"
    }
    )
  }
  category: string = ""
  getEventsByCategory() {
    if(this.category=="all")
    {
      this.getEvents();
    }
    
    this.eventService.getEventsByCategory(this.category).subscribe((data) => {
      this.events = data;
    })
  
  }

  getEventsByCategoryTicketPriceAsc() {
    this.eventService.getEventsByCategoryTicketPriceAsc(this.category).subscribe((data) => {
      this.events = data;
    })
  }

  getEventsByCategoryTicketPriceDesc() {
    this.eventService.getEventsByCategoryTicketPriceDesc(this.category).subscribe((data) => {
      this.events = data;
    })
  }

  getEventsByTicketPriceAsc() {
    this.showAscButton = true;
  this.showDescButton = false;
    console.log(this.category === "all");
    if (this.category === "all") {
      this.eventService.getEventsByTicketPriceAsc().subscribe((data) => {
        this.events = data;
       
      });
    }
    else {
      this.eventService.getEventsByCategoryTicketPriceAsc(this.category).subscribe((data) => {
        this.events = data;
      });
    }
  }

  getEventsByTicketPriceDesc() {
    this.showDescButton = true;
   this.showAscButton = false;
    console.log(this.category === "all");
    if (this.category === "all") {
      this.eventService.getEventsByTicketPriceDesc().subscribe((data) => {
        this.events = data;
       
      });
    }
    else {
      this.eventService.getEventsByCategoryTicketPriceDesc(this.category).subscribe((data) => { this.events = data });
    }
  }
  
}
