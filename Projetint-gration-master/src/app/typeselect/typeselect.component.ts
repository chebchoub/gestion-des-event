import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-typeselect',
  templateUrl: './typeselect.component.html',
  styleUrls: ['./typeselect.component.css']
})
export class TypeselectComponent {
  categoryInput : string;
  constructor(private userService: UserServiceService,private router:Router) {
    this.categoryInput="";
   }

  gotolocation(numpage:number)
  {
    if(numpage==1)
    {
    this.router.navigate(['./LocationEventConfirenceComponent']);
    this.categoryInput="Conférences";
    this.userService.CategoryInput=this.categoryInput;
    }
    else if (numpage==2)
    {
      this.router.navigate(['./LocationEventArtistiquesComponent']);
      this.categoryInput="Evénements Artistiques";
      this.userService.CategoryInput=this.categoryInput;
    }
    else
    {
      this.router.navigate(['./LocationEventSportifComponent']);
      this.categoryInput="Evénements Sportif";
      this.userService.CategoryInput=this.categoryInput;
    }


  }
}
