import { Component, OnInit } from '@angular/core';
import { ShopidHttpApiService ,Authfailed,AuthSuccessed} from '../services/shopid-http-api.service';
import { Observable } from 'rxjs';

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
			
		this.api.Signup(this.username,this.password).pipe(
	

		 AuthSuccessed(() => {
            alert("xlogged in");
         })
		 ,
		 Authfailed(() => {
            alert("xfailx ...");
         })
		 
		 
		 
	).subscribe();	
	
	
	}

}
