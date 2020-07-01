import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EMPTY,Observable ,of,throwError} from 'rxjs';
import { catchError,retry,shareReplay , delay,mergeMap, retryWhen,tap,finalize,timeout} from 'rxjs/operators';

const getErrorMessage = (maxRetry: number) =>
`error ${maxRetry}`;

export function retryWithBackoff(delayMs: number , maxRetry= 2 , backoffMs = 1000) {
  let retries = maxRetry;
  return (src: Observable<any>) =>
  src.pipe(
    retryWhen((errors:Observable<any>) => errors.pipe(
	 
	 mergeMap(error => {
	 
	
	 
	 if (error.status != 401 && retries-- > 0) {
	   const backoffTime = delayMs + (maxRetry - retries) * backoffMs;
	   return of(error).pipe(delay(backoffTime));
	 }
	

	  return throwError(error.error);
 
	  
	 }
	 
	 ))));
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

constructor(private http: HttpClient) { }




get(rout) {
	this.onRequest();
	return this.http.get<any>(this.apiurl+rout,{
		
		headers:this.headers,
		
	}).pipe(
	
	
     retryWithBackoff(500),	
	 
	  timeout(3000),
	 
	 tap((data)=>{
		 
		 if ("message" in data) {
			 this.onMessage(data.message);
		 } 
		
	 }),
	 
	 
	     finalize(() => {
             this.onFinalize();
         }),

	 
	catchError((e)=>
	{
	
console.log(e);
	this.onError(e);
    return EMPTY;
	
	}
	)
	 
	 
	);	
	
}

  
  post(rout,data) {
	  
	 this.onRequest();
	 return this.http.post<any>(this.apiurl+rout,data,{
		 
		 headers:this.headers,
		 
	 }).pipe(
     retryWithBackoff(1000),	
	 timeout(3000),
	 tap((data)=>{
		 
		 if ("message" in data) {
			 this.onMessage(data.message);
		 } 
		
	 }),
	 
	     finalize(() => {
             this.onFinalize();
         }),
	 
	catchError((e)=>
	{
	this.onError(e);
    return EMPTY;
	}
	)
	 
	 
	);	
	 
  }
  

  
}

