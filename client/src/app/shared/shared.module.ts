import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PaggingHeaderComponent } from './pagging-header/pagging-header.component';
import { PagerComponent } from './pager/pager.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { OrderTotalComponent } from './order-total/order-total.component';



@NgModule({
  declarations: [
    PaggingHeaderComponent,
    PagerComponent,
    OrderTotalComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot()
  ],
  exports:[
    PaginationModule,
    PaggingHeaderComponent,
    PagerComponent,
    CarouselModule,
    OrderTotalComponent

  ]
})
export class SharedModule { }
