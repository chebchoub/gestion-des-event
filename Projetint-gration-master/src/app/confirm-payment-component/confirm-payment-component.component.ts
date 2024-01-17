import { Component } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-confirm-payment-component',
  templateUrl: './confirm-payment-component.component.html',
  styleUrls: ['./confirm-payment-component.component.css']
})
export class ConfirmPaymentComponentComponent {
  transactionId = "";
  constructor(private payment : PaymentService){
  }
  ngOnInit(): void {
    this.transactionId = this.payment.transactionID;
  }
}
