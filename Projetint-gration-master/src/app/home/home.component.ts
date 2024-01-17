import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private authService:AuthService,private userService : UserServiceService,private router: Router){

  }
  ngOnInit(): void {
    console.log(this.authService.getUserDetails());
    this.userService.getUserByEmail(this.authService.getUserDetails()).subscribe(
      user => {
        console.log('User:', user);
      },
      error => {
        console.error('Error:', error);
      }
    );  }
    gotocreate()
    {  if(this.userService.isLoggedIn())
      {
        this.router.navigate(['/TypeselectComponent'])

      }else
      {
        this.router.navigate(['/LoginComponent'])

      }
    }
}
