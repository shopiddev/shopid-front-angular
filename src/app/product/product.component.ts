import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id;
  ngOnInit(): void {
	  
    let id = this.route.snapshot.paramMap.get('id');
	
	alert(id);
	  
  }

}
