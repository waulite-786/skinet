import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() getProduct? : Product

  ngOnInit(){
  }

  constructor(private basketService:BasketService){

  }

   addItemToBasket(){
    this.getProduct && this.basketService.addItemToBasket(this.getProduct);
   }
}
