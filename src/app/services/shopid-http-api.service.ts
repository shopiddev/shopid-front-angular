import { Injectable } from '@angular/core';
import { HttpApiService } from './http-api.service';
import { FireMessageService } from './fire-message.service';
import { Observable } from 'rxjs';

import { takeUntil ,catchError,retry,shareReplay , delay,mergeMap, retryWhen,tap,finalize,timeout} from 'rxjs/operators';

export function AuthSuccessed(a) {


 return function (obs: Observable<any>) { 
	return obs.pipe(
    tap({
      next: data => {
         a();
       }
       })		  
	 )
	}
  }

export function Authfailed(a) {

		 return function (obs: Observable<any>) { 
		  return obs.pipe(
			tap({
			error: error => {
				a();
			}
			})	  
		  )
		 }	
  }

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
	  
	
	
	return this.Post("login",{"username":user,"password":pass}).pipe(
	
		tap((data)=>{
			
			
			
			if ("token" in data) {
				
				 localStorage.setItem('token', data.token);	
                 localStorage.setItem('role', data.role);						 
				 
			} 
			
			
		}),


		 
	);	
	
	

	
	}
	
	
	 Signup(user,pass) {
	  
	
	
	return this.Post("register",{"username":user,"password":pass}).pipe(
	
		tap((data)=>{
			
			
			
			if ("token" in data) {
				
				 localStorage.setItem('token', data.token);	
				 localStorage.setItem('role', data.role);					 
				 
			} 
			
			
		}),


		 
	);	
	
	

	
	}
  
 
  
  
}
