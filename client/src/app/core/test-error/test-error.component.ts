import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent implements OnInit {
  baseUrl = environment.apiUrl;
  validationErrors:string[]=[];

  constructor(private httpClient:HttpClient,private toaster:ToastrService){

  }
  ngOnInit() {

 }

 get404Error(){
  this.httpClient.get(this.baseUrl+'products/42').subscribe({
    next:response=> console.log(response),
    error:error=>console.log(error)
  })
 }
 get500Error(){
  this.httpClient.get(this.baseUrl+'buggy/servererror').subscribe({
    next:response=> console.log(response),
    error:error=>console.log(error)
  })
 }
 get400Error(){
  this.httpClient.get(this.baseUrl+'buggy/badrequest').subscribe({
    next:response=> console.log(response),
    error:error=>console.log(error)
  })
 }
 get400ValidationError(){
  this.httpClient.get(this.baseUrl+'products/fortytwo').subscribe({
    next:response=> console.log(response),
    error:error=>{
      this.validationErrors = error.errors
      console.log(error)
    }
  })
 }

}
