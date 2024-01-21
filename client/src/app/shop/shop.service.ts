import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../shared/models/pagination';
import { Product } from '../shared/models/product';
import { Brand } from '../shared/models/brand';
import { Type } from '../shared/models/type';
import { ShopParams } from '../shared/models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseUrl ='https://localhost:5001/api/'
  constructor(private http:HttpClient) { }

  getProducts(shopParams:ShopParams){
    let productParams = new HttpParams()
    if(shopParams.brandId > 0) productParams = productParams.append('brandId', shopParams.brandId)
    if(shopParams.typeId > 0) productParams = productParams.append('typeId', shopParams.typeId)
     productParams = productParams.append('sort',shopParams.sort)
     productParams = productParams.append('pageIndex',shopParams.pageNumber)
     productParams = productParams.append('pageSize',shopParams.pageSize)
     if(shopParams.search) productParams = productParams.append('search',shopParams.search)

     console.log("search: " +shopParams.search)
     console.log("all params: " +productParams)

    return this.http.get<Pagination<Product[]>>(this.baseUrl+ 'products',{params:productParams});
  }
  getProduct(id:number){
    return this.http.get<Product>(this.baseUrl + 'products/' + id)
  }

  getBrands(){
    return this.http.get<Brand[]>(this.baseUrl + 'products/brands');
  }
  getTypes(){
    return this.http.get<Type[]>(this.baseUrl + 'products/types')
  }
}
