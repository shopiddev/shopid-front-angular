import { Component } from '@angular/core';

import { ShopidHttpApiService } from './services/shopid-http-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
  constructor(private api: ShopidHttpApiService) { }
	
	ngOnInit() {

/*	
test : 
	this.api.Login("a","b").subscribe((res) => {
  
         alert(res.message);
		 
		 	this.api.GetProduct("p1").subscribe((res2) => {
  
				alert(res2.message);
  
			});
  
    });
*/	
	
	
	
	}
	
  title = 'shopid-front-angular';
}
