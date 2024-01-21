import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routers:Routes = [
  {path:'',component:ShopComponent},
  {path:':id',component:ProductDetailsComponent,data:{breadcrumb:{alias:'productDetails'}}},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routers)
  ],
  exports:[
    RouterModule
  ]
})
export class ShopRoutingModule { }
