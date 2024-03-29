import { Component,Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DeliveryMethod } from 'src/app/shared/models/deliveryMethod';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout-delivery',
  templateUrl: './checkout-delivery.component.html',
  styleUrls: ['./checkout-delivery.component.scss']
})
export class CheckoutDeliveryComponent implements OnInit {

   @Input() checkoutForm?:FormGroup;
   deliveryMethod : DeliveryMethod[] = []

   constructor(private checkoutService:CheckoutService){}

  ngOnInit():void {
    this.checkoutService.getDeliveryMethod().subscribe({
      next:dm => this.deliveryMethod = dm,
    })
  }
}



