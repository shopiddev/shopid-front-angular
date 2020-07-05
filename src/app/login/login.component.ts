import { Component, OnInit } from '@angular/core';
import { ShopidHttpApiService ,Authfailed,AuthSuccessed} from '../services/shopid-http-api.service';
import { Observable ,OperatorFunction} from 'rxjs';






import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  constructor(public api: ShopidHttpApiService,private router: Router) { }
  
username; 
password; 

  ngOnInit(): void {
	  
	  
	  
  }




  
  login() {
	 

    this.api.Login({"username":this.username,"password" : this.password},
	

		 AuthSuccessed(() => {
		   alert("ginded ..."); 
           this.router.navigateByUrl('/addnew');
         })
		 ,
		 Authfailed(() => {
            alert("failed ..."); 
         })	 
		 
	);	
	  
  }
  
  
  
  /*
  loginx() {
	 
    this.api.Login({"username":this.username,"password":this.password},
	
	AuthSuccessed(() => {
           this.router.navigateByUrl('/addnew');
         })
		 ,
		 
	Authfailed(() => {
            alert("fail ..."); 
    })
		 		 
    );	
	  
  }
  */


}
