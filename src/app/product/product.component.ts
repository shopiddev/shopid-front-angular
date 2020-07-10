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

  ngOnInit(): void {
	  
	  



  
	if (this.route.snapshot.paramMap.get('id')) {
		

	
	this.api.getRequest("product/"+this.route.snapshot.paramMap.get('id'),
	
		tap({next: response=>{
		  
			this.product = response;
		  
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
		this.api.postRequest("product/"+this.route.snapshot.paramMap.get('id'),this.product,
	
		tap({next: response=>{
		  
			this.router.navigateByUrl('/');
		  
		}
	   
		})
	  );    
  }
  
  
  
  delete() {
	  
	this.api.getRequest("product/"+this.route.snapshot.paramMap.get('id')+"/"+this.product+"/delete",
	
		tap({next: response=>{
		  
			this.router.navigateByUrl('/');
		  
		}
	   
		})
	  );  
	  
  }

}
