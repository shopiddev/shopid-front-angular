import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryUpdaterService {

  constructor() { }
  
  updateStack = {};
  
  addToUpdateStack(cat: any) {
	  this.updateStack[cat.id] = cat.title;
  }
  

  
}
