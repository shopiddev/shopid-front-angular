import { Component, OnInit } from '@angular/core';
import { ShopidHttpApiService } from '../services/shopid-http-api.service';
import { tap} from 'rxjs/operators';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {

  constructor(public api: ShopidHttpApiService) { }

  ngOnInit(): void {
	  
	  this.api.AddNewProduct(
	  
		 {
				
			"title":"t1",
			
		    "caption":"c1",
		  
		  }
	  
	  ).pipe(
	  
	   tap({
			next: response => {
        
		         alert("added"+ response.id);
		
			}
       })	
	  
	  ).subscribe();
	  
  }

}
