import { Component } from '@angular/core';

import { ShopidHttpApiService } from './services/shopid-http-api.service';

import { catchError} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
  constructor(public api: ShopidHttpApiService) { }
	
	ngOnInit() {
		
		
			
/*
		 	this.api.Get("p1").subscribe((res2) => {
  
				alert(res2.message);
  
			});

*/
	
	
	}
	
  title = 'shopid-front-angular';
}
