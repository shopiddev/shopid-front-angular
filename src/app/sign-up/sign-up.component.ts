import { Component, OnInit } from '@angular/core';
import { ShopidHttpApiService } from '../services/shopid-http-api.service';
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
	  
	    /* const mani = new Observable(o=> {
          o.next("gggg");
        });


        mani.subscribe((d)=>{
         alert(d);
        });
		*/
  }
  
    signup() {
		
		this.api.Signup(this.username,this.password).subscribe((status)=>{
              alert(status);
        });

	}

}
