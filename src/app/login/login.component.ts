import { Component, OnInit } from '@angular/core';
import { ShopidHttpApiService ,Authfailed,AuthSuccessed} from '../services/shopid-http-api.service';



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
	 
    this.api.Login(this.username,this.password).pipe(
	

		 AuthSuccessed(() => {
           this.router.navigateByUrl('/addnew');
         })
		 ,
		 Authfailed(() => {
            alert("fail ..."); 
         })
		 
		 
		 
	).subscribe();	
	  
  }
  


}
