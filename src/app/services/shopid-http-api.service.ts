import { Injectable } from '@angular/core';
import { HttpApiService } from './http-api.service';

@Injectable({
  providedIn: 'root'
})
export class ShopidHttpApiService {

  constructor(private http: HttpApiService) { }
  
  Login(username,password) {
	  return this.http.post("login/",{"username":username,"password":password});
  }
  
  
  GetProduct(id) {
	  return this.http.get("product/"+id);
  }

  
}
