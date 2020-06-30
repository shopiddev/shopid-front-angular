import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FireMessageService {

  constructor() { }
  

  fire(m) {
	  
	  if (m.type == 'error') {
		   alert("fireError : "+m.text);
	  }
	  
	  
	  if (m.type == 'info') {
		   alert("fireInfo : "+m.text);
	  }
	 
  }
  
}
