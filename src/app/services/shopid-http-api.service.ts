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
  
  
  
  Post(rout,param) {
	  return this.http.post(rout,param);
  }
  
  Get(rout) {
	  return this.http.get(rout);
  }

  
}
