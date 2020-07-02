import { Injectable } from '@angular/core';
import { HttpApiService } from './http-api.service';
import { FireMessageService } from './fire-message.service';

@Injectable({
  providedIn: 'root'
})
export class ShopidHttpApiService {

status = "idle";

  constructor(private http: HttpApiService , private fm: FireMessageService) {
	  
   this.http.apiurl = "http://127.0.0.1:8000/api/";
   
   this.http.headers = {};
   
   this.http.headers.Accept = "application/json";
  
					   
   if (localStorage.getItem('token')) {
	   
	   this.http.headers.Authorization = "Bearer "+localStorage.getItem('token');
	   
   }					   
   
   var self = this;
	 
   
   this.http.onRequest = function () {
	   self.status = "request ...";  
   }
   
   this.http.onFinalize = function (message) {	   
	   self.status = "idle";   
   }
   
   this.http.onError = function (e) {
	 self.status = "error";

		
	self.fm.fire({
			   "type":"error"
			   ,
			   "message":e
			   });
  
	   
   }
   
   
   this.http.onMessage = function (m) {
      
		self.fm.fire({
			   "type":"info"
			   ,
			   "message":m
			   });
	  
   }
   
   
  }
  
  
  
  Post(rout,param) {
	  return this.http.post(rout,param);
  }
  
  Get(rout) {
	  return this.http.get(rout);
  }

  
  
  
  
  
  
  Login(user,pass) {
		
		this.Post("login",{"username":user,"password":pass}).subscribe((response)=>{
			
            if ("token" in response) {
				 localStorage.setItem('token', response.token);
			} 
			
		});
		
	}
  
  Signup(user,pass) {
		
		this.Post("register",{"username":user,"password":pass}).subscribe((response)=>{
			
            if ("token" in response) {
				localStorage.setItem('token', response.token);
			} 
			
		});
		
	}
  
  
}
