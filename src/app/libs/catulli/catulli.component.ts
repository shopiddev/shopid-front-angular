import { Component, OnInit ,Input } from '@angular/core';
import { ShopidHttpApiService } from '../../services/shopid-http-api.service';
import { tap} from 'rxjs/operators';

@Component({
  selector: 'app-catulli',
  templateUrl: './catulli.component.html',
  styleUrls: ['./catulli.component.css']
})
export class CatulliComponent implements OnInit {

  constructor(private api: ShopidHttpApiService) { }
  @Input() parent: any;
  cats;
  page=1;
  
  more() {
	 
	  this.load();
  }
  
  load() {
	  
	  var otherObject: any;
	  
	  	  	this.api.getRequest("category/"+this.parent+"?page="+this.page,
	
		tap({next: response =>{
		  
		 otherObject = response;
		   
		   if (this.page == 1) {
			this.cats=otherObject.data;
		   } else {
			   
		    this.cats = this.cats.concat(otherObject.data);
		 
		
		   
		   }
		   
		 
		 if (otherObject.data.length > 0) {
		   this.page = otherObject.current_page+1;
		}
		      
		  
		}
	   
		})
	  );  
  }
  
  ngOnInit(): void {
	  
	  var self = this;
	  
	  setTimeout(function () {
		  
		   self.load();
		  
	  },1);
   
	  
  }

}
