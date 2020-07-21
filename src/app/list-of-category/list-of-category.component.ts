import { Component, OnInit , forwardRef , Input } from '@angular/core';

import { CatulliComponent } from '../libs/catulli/catulli.component';
import { ShopidHttpApiService } from '../services/shopid-http-api.service';
import { CategoryUpdaterService } from '../libs/catulli/category-updater.service';
import { ControlValueAccessor ,NG_VALUE_ACCESSOR ,NgModel} from '@angular/forms';

@Component({
  selector: 'app-list-of-category',
  templateUrl: './list-of-category.component.html',
  styleUrls: ['./list-of-category.component.css'],
      providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ListOfCategoryComponent),
            multi: true
        }
	]
})
export class ListOfCategoryComponent extends CatulliComponent  {

  constructor(api: ShopidHttpApiService) { 
   super(api);
  }
  
  @Input() context: any;

  
  
  checkValue(c,id) {
	  
	  if (c.target.checked) {
	  this.context.selected_category[id] = id;
	  } else {
		  
		delete this.context.selected_category[id];  
	  } 
	console.log(this.context.selected_category);
  }

  
  
  
  
       writeValue(value:any) {
           //this.parentarray = value;
		   
		   
		 
		  
        }

        registerOnChange(fn) {
			
            this.propagateChange = fn;
			
        }

        registerOnTouched(fn){
        }
		
		
	    propagateChange = (_:any) => {};	
		

		

}
