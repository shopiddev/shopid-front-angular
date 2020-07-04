import { Component, OnInit } from '@angular/core';
import { ShopidHttpApiService ,Authfailed,AuthSuccessed} from '../services/shopid-http-api.service';

import { finalize,tap,catchError} from 'rxjs/operators';

import { Observable,EMPTY,throwError} from 'rxjs';

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
	 
    this.api.Login(this.username,this.password).pipe(
	

		 AuthSuccessed(() => {
            alert("logged in");
         })
		 ,
		 Authfailed(() => {
            alert("fail ...");
         })
		 
		 
		 
	).subscribe();	
	  
  }
  


}
