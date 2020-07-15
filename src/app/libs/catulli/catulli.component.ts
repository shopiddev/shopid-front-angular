import { Component, OnInit ,Input ,Output,EventEmitter,forwardRef} from '@angular/core';
import { ShopidHttpApiService } from '../../services/shopid-http-api.service';
import { tap} from 'rxjs/operators';


import { ControlValueAccessor ,NG_VALUE_ACCESSOR ,NgModel} from '@angular/forms';

import { CategoryUpdaterService } from './category-updater.service';

@Component({
  selector: 'app-catulli',
  templateUrl: './catulli.component.html',
  styleUrls: ['./catulli.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CatulliComponent),
            multi: true
        }
	]
})
export class CatulliComponent  implements  ControlValueAccessor , OnInit { 

  constructor(private api: ShopidHttpApiService , private updateService: CategoryUpdaterService) { }
  @Input() parent: any;
  @Input() index: number;
  
  parentarray: any;
  
  add() {
	
	  
	 
	  
	  //call api to add to this.parent
	   var otherObject: any;
	  
	  		this.api.postRequest("category/add",{"title":prompt("enter title"),"parent":this.parent},
		 
		 
		 tap({next: response =>{ 
		 
		 otherObject = response;
		 
		  this.cats.push({"id":otherObject.id,"title":otherObject.title});
		 
		 }
	   
		})
		 
		 );
		 
		 
	  
  }

  remove() {
		
		
	//"call api remove "+this.parent;
		
		 this.parentarray.splice(this.index, 1);
		
		 this.propagateChange(this.parentarray);
		 
		 this.api.getRequest("category/"+this.parent+"/delete",
		 
		 
		 tap({next: response =>{ 
		 
		 }
	   
		})
		 
		 );
		
		 
  }
	
	
  cats;
  page=1;
  
  update(id,title) {
            this.updateService.addToUpdateStack({"id":id,"title":title});
			// or call api update title for id
			
		this.api.postRequest("category/"+id+"/update",{"title":title},
		 
		 
		 tap({next: response =>{ 
		  
		 }
	   
		})
		 
		 );
		 
		 
  }
  
  more() {
	// this must be called when scroll to end ...
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
  
  
  writeValue(value:any) {
           this.parentarray = value;
		  
		  //alert(value);
		  
        }

        registerOnChange(fn) {
			
            this.propagateChange = fn;
			
        }

        registerOnTouched(fn){
        }
		
	    private propagateChange = (_:any) => {};	
		
		

}
