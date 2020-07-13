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

category;

add() {
	
	var parentid;
	if (!this.category.id) {
		parentid = 0;
	} else {
		
		parentid = this.category.id;
		
	}
	
	this.api.postRequest("category",{"title":this.title,"parent":this.category.id},
	
	 tap({next: response=>{

		 alert("added");
		  
	   }
	   
	  })
	
	);
}

  ngOnInit(): void {
	  
	  
	  
  }

}
