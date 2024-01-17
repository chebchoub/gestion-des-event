import { Observable } from "rxjs";
import { User } from "./user";

export class Event {
  eventName: string;
  category:string;
  dateTime:Date;
  location:string;
  ticketPrice:number;
  description:string;
  capacity:number;
  contactInformation:string;
  imageUrl:string;

  constructor(eventName:string,ticketPrice:number,category:string,dateTime:Date,location:string, description:string,capacity:number,contactInformation:string,imageUrl:string){
    this.eventName=eventName;
    this.category=category;
    this.dateTime=dateTime;
    this.location=location;
    this.description=description;
    this.capacity=capacity;
    this.contactInformation=contactInformation;
    this.imageUrl=imageUrl;
    this.ticketPrice=ticketPrice;
  }
}
