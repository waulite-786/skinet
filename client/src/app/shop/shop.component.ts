import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Product } from '../shared/models/product';
import { ShopService } from './shop.service';
import { Brand } from '../shared/models/brand';
import { Type } from '../shared/models/type';
import { ShopParams } from '../shared/models/shopParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  @ViewChild('search') searchTearm?:ElementRef;
  products:Product[]=[]
  brands:Brand[]=[]
  types:Type[]=[]

  shopParams = new ShopParams()

  sortOptions=[
    {name:'Alphabetical',value:'name'},
    {name:'Price:Low to high',value:'priceAsc'},
    {name:'Price:High to low',value:'priceDesc'}
  ]
  totalCount = 0;

  constructor(private shopService:ShopService){

  }
  ngOnInit(): void {
    this.getProducts()
    this.getBrands()
    this.getTypes()
  }
  getProducts(){
    this.shopService.getProducts(this.shopParams).subscribe({
      next: response =>{
        this.products = response.data,
        this.shopParams.pageNumber = response.pageIndex,
        this.shopParams.pageSize = response.pageSize
        this.totalCount = response.count
      },
      error:error=>console.log(error)
     });
  }

  getBrands(){
    this.shopService.getBrands().subscribe({
      next:(response)=> this.brands = [{id:0,name:'All'}, ...response] ,
      error:error=>console.log(error)
    })
  }
  getTypes(){
    this.shopService.getTypes().subscribe({
      next:response=> this.types =[{id:0,name:'All'}, ...response],
      error:error=>console.log(error)
    })
  }

  onBrandSelected(brandId:number){
    this.shopParams.brandId = brandId
    this.shopParams.pageNumber = 1; // if you on page to and click on any filter error will print in console now handle this line
    this.getProducts()
  }
  onTypeSelected(typeId:number){
    this.shopParams.typeId = typeId
    this.shopParams.pageNumber = 1; // if you on page to and click on any filter error will print in console now handle this line
    this.getProducts()
  }
  onSortSelected(event:any){
   this.shopParams.sort = event.target.value
   this.shopParams.pageNumber = 1; // if you on page to and click on any filter error will print in console now handle this line
   this .getProducts()
  }
  onPageChange(event:any){
    if(this.shopParams.pageNumber != event){
      this.shopParams.pageNumber = event
      this.getProducts()
    }
  }
  onSearch(){
    this.shopParams.search = this.searchTearm?.nativeElement.value
    this.getProducts()
  }
  onReset(){
    if(this.searchTearm) this.searchTearm.nativeElement.value = ''
    this.shopParams = new ShopParams()
    this.getProducts()
  }
}
