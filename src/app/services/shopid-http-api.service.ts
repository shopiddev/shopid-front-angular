import { Injectable } from '@angular/core';
import { HttpApiService } from './http-api.service';
import { FireMessageService } from './fire-message.service';
import { Observable , OperatorFunction } from 'rxjs';

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
isAuthed = false;
role = "-1";


  constructor(private http: HttpApiService , private fm: FireMessageService) {
	  
	  if (typeof localStorage.getItem('token') != "undefined") {
		  this.isAuthed = true; 
		  this.role =  localStorage.getItem('role');	
	  }
	 	
     
	  
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
  
  
  


  
  Get(route,ops) {
	  const operators: [OperatorFunction<any, any>, OperatorFunction<any, any>] = ops;
	  return this.http.get(route).pipe( ... operators).subscribe();	
  }
  
  
  Post(route,param,ops) {
	
      const operators: [OperatorFunction<any, any>, OperatorFunction<any, any>] = ops;
	  
	  
	  return this.http.post(route,param).pipe( ... operators).subscribe();	
  }
  

  
   Login(param, ... ops) {
	   


const saveauth = tap((data: any)=>{
			
			
			
			if (data.hasOwnProperty("token")) {
				
			
				 localStorage.setItem('token', data.token);	
                 localStorage.setItem('role', data.user.role);		
				 
				

				this.isAuthed = true; 
				this.role =  data.user.role;	
				
				 
			} 
			
			
			
		});
		
		

		const loginops = [saveauth].concat(ops);
   
     return this.Post("login",param,loginops);
	 
	 
   }

   Signup(param, ... ops) {
	   
			const saveauth = tap((data: any)=>{
			
			
			
			if (data.hasOwnProperty("token")) {
				
			
				 localStorage.setItem('token', data.token);	
                 localStorage.setItem('role', data.user.role);		
				 
				

				this.isAuthed = true; 
				this.role =  data.user.role;	
				
				 
			} 
			
			
			
		});
		
		

		const signupops = [saveauth].concat(ops);
     return this.Post("register",param,signupops);
   }

   
   
     Post_old(rout,param) {
	  return this.http.post(rout,param);
  }
  
    Get_old(rout) {
	  return this.http.get(rout);
  }

  
  Login_old(user,pass) {/*
	  
	
	
	return this.Post("login",{"username":user,"password":pass}).pipe(
	
		tap((data)=>{
			
			
			
			if ("token" in data) {
				
				 localStorage.setItem('token', data.token);	
                 localStorage.setItem('role', data.user.role);		


				this.isAuthed = true; 
				this.role =  data.user.role;	
		  
				 
			} 
			
			
		}),


		 
	);	
	
	
*/
	
	}
	
	
	Signup_old(user,pass) {
	  /*
	return this.Post("register",{"username":user,"password":pass}).pipe(
	
		tap((data)=>{
			
			
			
			if ("token" in data) {
				
				 localStorage.setItem('token', data.token);	
				 localStorage.setItem('role', data.user.role);	

				this.isAuthed = true; 
				this.role =  data.user.role;	
				 
				 
			} 
			
			
		}),


		 
	);	
	*/
	

	
	}
  
 
 
  AddNewProduct(param, ...ops) {
	  
	  return this.Post("addnew",param,ops);
	
  }
  
  
  List(param, ...ops ) {
	  
	  return this.Get("list",ops);
	
  }

  
  
}
