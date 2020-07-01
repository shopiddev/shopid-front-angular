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
		
		
			
		this.api.Get("user").subscribe((response)=>{
			
              alert(response.id);
			
		});
	
	
	}
	
  title = 'shopid-front-angular';
}
