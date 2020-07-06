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

breakpoint: number = 3;
  onResize(event) {


    if (event.target.innerWidth < 200) {
      this.breakpoint = 1;
    }

    if (event.target.innerWidth >= 200 && event.target.innerWidth < 800) {
      this.breakpoint = 3;
    }

    if (event.target.innerWidth >= 800) {
      this.breakpoint = 4;
    }

  }
  
  
  ngOnInit(): void {
	  	this.api.List("latest",
	
	  tap({next: response=>{
		  
		  this.list = response;
		  
	   }
	   
	  }));

	
  }

}
