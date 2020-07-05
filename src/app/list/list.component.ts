import { Component, OnInit } from '@angular/core';
import { ShopidHttpApiService } from '../services/shopid-http-api.service';
import { tap} from 'rxjs/operators';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public api: ShopidHttpApiService) { }
list;
  ngOnInit(): void {
	  	this.api.List("latest",
	
	  tap({next: response=>{
		  
		  this.list = response;
		  
	   }
	   
	  }));

	
  }

}
