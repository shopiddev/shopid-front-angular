import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

apiurl = "http://echo.jsontest.com/status/ok/message/";

constructor(private http: HttpClient) { }
  
  post(rout,data) {
	 
	 return this.http.post<apimessage>(this.apiurl+rout,data);	
	 
  }
  
  get(rout,data) {
	 
	 return this.http.get<apimessage>(this.apiurl+rout);	
	 
  }
  
}

interface apimessage {
  status: any;
  message: any;
}