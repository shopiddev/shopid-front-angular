import { Component, OnInit } from '@angular/core';
import { ShopidHttpApiService } from '../services/shopid-http-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public api: ShopidHttpApiService) { }
  
username; 
password; 

  ngOnInit(): void {
	  
	  
	  
  }
  
  
  login() {
	 
    this.api.Login(this.username,this.password); 	 
	  
  }
  
  /*
      login() {
		
		this.api.Post("login",{"username":this.username,"password":this.password}).subscribe((response)=>{
			
            if ("token" in response) {
				 localStorage.setItem('token', response.token);
			} 
			
		});
		
	}
	*/

}
