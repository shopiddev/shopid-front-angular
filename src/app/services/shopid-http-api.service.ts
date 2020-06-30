import { Injectable } from '@angular/core';
import { HttpApiService } from './http-api.service';
import { FireMessageService } from './fire-message.service';

@Injectable({
  providedIn: 'root'
})
export class ShopidHttpApiService {

status = "idle";

  constructor(private http: HttpApiService , private fm: FireMessageService) {
   
   var self = this;
	 
   
   this.http.onRequest = function () {
	   self.status = "request ...";  
   }
   
   this.http.onFinalize = function (message) {	   
	   self.status = "idle";   
   }
   
   this.http.onError = function (e) {
	   self.status = e;
	   alert(e);
   }
   
   
   this.http.onMessage = function (m) {
      
	 self.fm.fire(m);
	  
   }
   
   
  }
  
  
  
  Post(rout,param) {
	  return this.http.post(rout,param);
  }
  
  Get(rout) {
	  return this.http.get(rout);
  }

  
}
