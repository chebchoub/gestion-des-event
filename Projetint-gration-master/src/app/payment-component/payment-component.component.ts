import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment-component',
  templateUrl: './payment-component.component.html',
  styleUrls: ['./payment-component.component.css']
})
export class PaymentComponentComponent implements OnInit{
  amount = 0;

  @ViewChild('paymentRef' , {static : true}) paymentRef !: ElementRef

  constructor(private router : Router , private routeAct : ActivatedRoute , private payment : PaymentService){

  }
  ngOnInit(): void {
    this.amount=this.routeAct.snapshot.params['ticketPrice'];
    window.paypal.Buttons(
      {
        style: {
          layout: 'horizontal',
          color: 'blue',
          shape: 'rect',
          label: 'paypal',
        },
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: this.amount.toString(),
                  currency_code: 'USD'
                }
              }
            ]
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            if (details.status === 'COMPLETED') {
              this.payment.transactionID = details.id;
              this.router.navigate(['./ConfirmPaymentComponentComponent']);
              console.log(details.id);
            }
          });
      },
      onError: (error: any) => {
        console.log(error);
      }
    }
    ).render(this.paymentRef.nativeElement);
  }


  
  cancel() {
    this.router.navigate(['./AlleventComponent']);
  }
}
