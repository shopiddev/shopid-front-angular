import { Component, OnInit } from '@angular/core';


import { ShopidHttpApiService } from '../services/shopid-http-api.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

constructor(public api: ShopidHttpApiService) {}

  ngOnInit(): void {
	
     
      this.api.Logout();	 
	  
	  
  }

}
