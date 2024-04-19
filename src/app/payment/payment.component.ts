import { style } from '@angular/animations';
import { Component, ElementRef, ViewChild, viewChild,OnInit, defineInjectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  @ViewChild('paymentRef',{static:true}) paymentRef: ElementRef;


  ngOnInit(): void {
    // connecting to Paypal
  localStorage.setItem("transId","$18891910951$%")
      window.paypal.Buttons(
        {
          style:{
            layout: 'horizontal',
            color: 'blue',
            shape: 'rect',
            label: 'paypal',
          },
          createOrder: (data: any,actions: any) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: this.amount.toString(),
                    currency_code: 'USD'
                  }
                }
              ]
            })
          },
          onApprove: (data: any,actions: any) => {
            return actions.order.capture().then((details:any) => {
              if(details.status === 'COMPLETED'){
                localStorage.setItem("paid","true")
                window.paid = true
                this.router.navigate(['confirm'])
              }
            })
          },
          onError: (error:any) => {
            console.log(error)
          }
        }
      ).render(this.paymentRef.nativeElement);
  }

  amount: string;

  constructor(
    private router:Router,
    private store: AuthService
  ){
    this.amount = '7035.65'
  }
}
