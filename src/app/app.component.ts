import { Component } from '@angular/core';

import { ShopidHttpApiService } from './services/shopid-http-api.service';

import { catchError} from 'rxjs/operators';


import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
  constructor(public api: ShopidHttpApiService , public translate: TranslateService) { 
  

  
 translate.addLangs(['en','de'])
 translate.setDefaultLang('en');
 translate.use('en');
  
  }

ngOnInit() {
		

/*
 this.translate.get(['addnew'])
 .subscribe(translations => {
 
 alert(translations['addnew']);
  
 });
	*/		
	
	/*
		this.api.Get("user").subscribe((response)=>{
			
              alert(response.id);
			
		});
	  */  
	
	}
	
  title = 'shopid-front-angular';
}
