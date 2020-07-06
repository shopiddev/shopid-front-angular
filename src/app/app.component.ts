import { Component } from '@angular/core';

import { ShopidHttpApiService } from './services/shopid-http-api.service';

import { tap} from 'rxjs/operators';


import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	saveCost(value){
    this.cost=value;
  }
	cost = 100;
	
	
  constructor(public api: ShopidHttpApiService , public translate: TranslateService) { 
  
  
  
  
 translate.addLangs(['en','de'])
 translate.setDefaultLang('en');
 translate.use('en');
  
  }
  


ngOnInit() {
	
}
	
	

}
