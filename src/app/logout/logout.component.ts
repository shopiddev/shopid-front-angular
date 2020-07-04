import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { ShopidHttpApiService } from '../services/shopid-http-api.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

constructor(private router: Router , public api: ShopidHttpApiService) {}

  ngOnInit(): void {
	
		  this.api.isAuthed = false; 
		  this.api.role = "-1";
		  
		  
	  localStorage.removeItem('token');
	  localStorage.removeItem('role');
	  this.router.navigateByUrl('/');
	  
	  
	  
  }

}
