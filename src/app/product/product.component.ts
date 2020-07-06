import { Component, OnInit } from '@angular/core';
import { ShopidHttpApiService } from '../services/shopid-http-api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { tap} from 'rxjs/operators';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private route: ActivatedRoute,private api: ShopidHttpApiService,private router: Router) { }

  product;

  ngOnInit(): void {
	  
  
	
	this.api.GetProduct({"id":this.route.snapshot.paramMap.get('id')},
	
		tap({next: response=>{
		  
			this.product = response;
		  
		}
	   
		})
	  );

	  
	
	  
  }
  
  delete() {
	  
	this.api.DeleteProduct({"id":this.route.snapshot.paramMap.get('id')},
	
		tap({next: response=>{
		  
			this.router.navigateByUrl('/');
		  
		}
	   
		})
	  );  
	  
  }

}
