import { Component, OnInit } from '@angular/core';
import { ShopidHttpApiService } from '../services/shopid-http-api.service';
import { tap} from 'rxjs/operators';

import { CategoryUpdaterService } from '../libs/catulli/category-updater.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public api: ShopidHttpApiService, private updateService: CategoryUpdaterService) { }
  
title;
category;

/*
addToUpdateStack() {
	
	console.log(this.updateService.updateStack);
	
}
*/

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
