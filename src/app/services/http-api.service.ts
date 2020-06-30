import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EMPTY,Observable ,of,throwError} from 'rxjs';
import { catchError,retry,shareReplay , delay,mergeMap, retryWhen,tap,finalize} from 'rxjs/operators';

const getErrorMessage = (maxRetry: number) =>
`error ${maxRetry}`;

export function retryWithBackoff(delayMs: number , maxRetry= 2 , backoffMs = 1000) {
  let retries = maxRetry;
  return (src: Observable<any>) =>
  src.pipe(
    retryWhen((errors:Observable<any>) => errors.pipe(
	 
	 mergeMap(error => {
	 
	 if (retries-- > 0) {
	   const backoffTime = delayMs + (maxRetry - retries) * backoffMs;
	   return of(error).pipe(delay(backoffTime));
	 }
	  return throwError(getErrorMessage(maxRetry));
	 }
	 
	 ))));
}


@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

apiurl = "http://echo.jsontest.com/message/";
//apiurl = "http://localhost/j.php?";


onError;
onRequest;
onFinalize;
onMessage;

constructor(private http: HttpClient) { }




get(rout) {
	this.onRequest();
	return this.http.get<any>(this.apiurl+rout).pipe(
     retryWithBackoff(500),	
	 
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

  
  post(rout,data) {
	  
	 this.onRequest();
	 return this.http.post<any>(this.apiurl+rout,data).pipe(
     retryWithBackoff(1000),	
	 
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

