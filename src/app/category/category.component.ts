import { Component, OnInit } from '@angular/core';
import { ShopidHttpApiService } from '../services/shopid-http-api.service';
import { tap} from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public api: ShopidHttpApiService) { }
  
title;

add() {
	
	this.api.postRequest("category",{"title":this.title},
	
	 tap({next: response=>{

		 alert("added");
		  
	   }
	   
	  })
	
	);
}

  ngOnInit(): void {
	  
	  
	  
  }

}
