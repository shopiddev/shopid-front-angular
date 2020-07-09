import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {TranslateService} from '@ngx-translate/core';


import { EMPTY,Observable ,of,throwError,TimeoutError } from 'rxjs';
import { takeUntil ,catchError,retry,shareReplay , delay,mergeMap, retryWhen,tap,finalize,timeout} from 'rxjs/operators';



export function retryWithBackoff(delayMs: number , maxRetry= 2 , backoffMs = 1000) {
  let retries = maxRetry;
 return (src: Observable<any>) =>
  src.pipe(
  
		retryWhen((errors:Observable<any>) => errors.pipe(

		mergeMap(error => {
			
			

		if (error.status !== 401 && error.status !== 404) {
			if (retries-- > 0) {
			const backoffTime = delayMs + (maxRetry - retries) * backoffMs;
			return of(error).pipe(delay(backoffTime));
			}
		}
		
		 console.log(error);
		
		if ("message" in error.error) {
		 
		     
		  
			return throwError(error.error.message);
			
			
			
		} else {
				
			
		    return throwError(error.status);
			
			
		}
		
		
		
		}

	    )
	 
	   ))
	 
	 );
}







@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

apiurl;
headers;


onError;
onRequest;
onFinalize;
onMessage;

constructor(private http: HttpClient, public translate: TranslateService) { }




get(rout) {
	
	
	
	
	this.onRequest();
	return this.http.get<any>(this.apiurl+rout,{
		
		headers:this.headers,
		
	}).pipe(
	
	
     retryWithBackoff(500),	
	 
	 
	  timeout(30*1000),
	 
	     tap({
      next: data => {

	  
		 
		 if ("message" in data) {
		
	
			 
			 this.translate.get(['infos'])
 .subscribe(translations => {
 



			
    let msg;
	
	if (typeof translations.infos[data.message] != "undefined") {
		
		
		msg = translations.infos[data.message];
		
		
	} else {
		
	
		msg = data.message;
		
	}
	 
   
	this.onMessage(msg);
	
 
  
 });
 
 
		 } 
	
	  
      },
      error: e => {
        

this.translate.get(['errors'])
 .subscribe(translations => {
 


	     	var er;
			if (e instanceof TimeoutError) {
				er = 999;
			} else {
				er = e;
			}
			
			if (er == "") {
				er = "empty error message";
			}
			
    let ermsg;
	
	if (typeof translations.errors[er] != "undefined") {
		
		
		ermsg = translations.errors[er];
		
		
	} else {
		
	
		ermsg = translations.errors["unknown"]+" : "+er;
		
	}
	 
	
   
	this.onError(ermsg);
	
	
 
  
 });
 
      },
      complete: () => { 
	  this.onFinalize();
	  
	  }
    })
	 
	 


	 

	 
	 
	);	
	
}

post(rout,params) {
	
	
	
	this.onRequest();
	return this.http.post<any>(this.apiurl+rout,params,{
		
		headers:this.headers,
		
	}).pipe(
	
	
     retryWithBackoff(500),	
	 
	 
	  timeout(30*1000),
	 
	     tap({
      next: data => {

	  
		 
		 if ("message" in data) {
			 
			 
			 this.translate.get(['infos'])
 .subscribe(translations => {
 



			
    let msg;
	
	if (typeof translations.infos[data.message] != "undefined") {
		
		
		msg = translations.infos[data.message];
		
		
	} else {
		
	
		msg = data.message;
		
	}
	 
   
	this.onMessage(msg);
	
 
  
 });
 
 
		 } 
	
	  
      },
      error: e => {
        

this.translate.get(['errors'])
 .subscribe(translations => {
 


	     	var er;
			if (e instanceof TimeoutError) {
				er = 999;
			} else {
				er = e;
			}
			
		
			
    let ermsg;
	
	if (typeof translations.errors[er] != "undefined") {
		
		
		ermsg = translations.errors[er];
		
		
	} else {
		
	
		ermsg = translations.errors["unknown"]+" : "+er;
		
	}
	 
   
   
   
	this.onError(ermsg);
	
	
 
  
 });
 
      },
      complete: () => { 
	  this.onFinalize();
	  
	  }
    })
	 
	 


	 

	 
	 
	);	
	
}

  
}

