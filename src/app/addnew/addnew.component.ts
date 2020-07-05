import { Component, OnInit } from '@angular/core';
import { ShopidHttpApiService } from '../services/shopid-http-api.service';
import { tap} from 'rxjs/operators';
import {Router} from '@angular/router';
@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {
title;
caption;
  constructor(public api: ShopidHttpApiService,private router: Router) { }

  post() {
	  
 /*
	  this.api.AddNewProduct(
	  
		 {
				
			"title":this.title,
			
		    "caption":this.caption,
		  
		  }
	  
	  ).pipe(
	  
	   tap({
			next: response => {
        
				 this.router.navigateByUrl('/');
		
			}
       })	
	  
	  ).subscribe();
	  */
	  
	  
	  this.api.AddNewProduct({
				
			"title":this.title,
			
		    "caption":this.caption,
		  
		  },
		  
		  tap({
			next: response => {
        
				 this.router.navigateByUrl('/');
		
			}
			})	
		  
		  );
  }
  
  ngOnInit(): void {
	  
  }

}
