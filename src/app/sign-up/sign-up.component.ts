import { Component, OnInit } from '@angular/core';
import { ShopidHttpApiService } from '../services/shopid-http-api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public api: ShopidHttpApiService) { }
  
username; 
password; 

  ngOnInit(): void {
  }
  
    signup() {
		this.api.Post("signup",{"username":this.username,"password":this.password}).subscribe((response)=>{
			
            if ("token" in response) {
				 localStorage.setItem('token', response.token);
			} 
			
		});
	}

}
