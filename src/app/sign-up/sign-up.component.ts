import { Component, OnInit } from '@angular/core';
import { ShopidHttpApiService ,Authfailed,AuthSuccessed} from '../services/shopid-http-api.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public api: ShopidHttpApiService,private router: Router) { }
  
username; 
password; 

  ngOnInit(): void {
	  

  }
  
    signup() {
		
	this.api.Signup({"username":this.username,"password" : this.password},
	

		 AuthSuccessed(() => {
		   alert("ginded ..."); 
           this.router.navigateByUrl('/addnew');
         })
		 ,
		 Authfailed(() => {
            alert("failed ..."); 
         })	 
		 
	);	
	
			
		/*this.api.Signup(this.username,this.password).pipe(
	

		 AuthSuccessed(() => {
            
			
			this.router.navigateByUrl('/addnew');
         })
		 ,
		 Authfailed(() => {
            alert("failed to sign up ...");
         })
		 
		 
		 
	).subscribe();	
	*/
	
	}

}
