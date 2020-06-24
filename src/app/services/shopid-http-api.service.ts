import { Injectable } from '@angular/core';
import { HttpApiService } from './http-api.service';

@Injectable({
  providedIn: 'root'
})
export class ShopidHttpApiService {

status = "idle";

  constructor(private http: HttpApiService) {
	  var parent = this;
	  

   
   this.http.onRequest = function () {
	   parent.status = "request ...";  
   }
   
   this.http.onFinalize = function () {
	   parent.status = "idle";  
   }
   
   
   this.http.onError = function (e) {
	   parent.status = e;
	   alert("err");
   }
   
   
   
  }
  
  Login(username,password) {
	  return this.http.post("login/",{"username":username,"password":password});
  }
  
  
  GetProduct(id) {
	  return this.http.get("product/"+id);
  }

  
}
