import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ShopidHttpApiService } from '../services/shopid-http-api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { tap} from 'rxjs/operators';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


/*
@Injectable({
  providedIn: 'root'
})
*/




export class ProductComponent implements OnInit {

api2;

  constructor(private route: ActivatedRoute,private api: ShopidHttpApiService,private router: Router) { 
  

  }
  
  

  


  product;
  

  
  selected_category = {};

  ngOnInit(): void {
	  
	  
 


  
	if (this.route.snapshot.paramMap.get('id')) {
		
      
	
	this.api.getRequest("product/"+this.route.snapshot.paramMap.get('id'),
	
		tap({next: response=>{
		  
			this.product = response;
			
			for (var i = 0 ; i < this.product.cats.length;i++) {
				
		
				
				 this.selected_category[this.product.cats[i].category_id] = true;
			}
			
		  
		}
	   
		})
	  );

	  } else {
		  
		  this.product = {"caption":"","title":""};
		  this.product.title = "title";
		  this.product.caption = "caption";
		
		  
	  }
	
	  
  }
  
  save() {
	  var selectedcats = [];
for (var key in this.selected_category) {
    if (this.selected_category.hasOwnProperty(key)) {
       selectedcats.push(key);
    }
}
	  
	  this.product.cats = selectedcats;
	  
		this.api.postRequest("product/"+this.route.snapshot.paramMap.get('id'),this.product,
	
		tap({next: response=>{
		  
			this.router.navigateByUrl('/');
		  
		}
	   
		})
	  );    
  }
  
  
  
  delete() {
	  
	this.api.getRequest("product/"+this.route.snapshot.paramMap.get('id')+"/delete",
	
		tap({next: response=>{
		  
			this.router.navigateByUrl('/');
		  
		}
	   
		})
	  );  
	  
  }

}
