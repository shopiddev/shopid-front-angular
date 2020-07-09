import { Component, OnInit , ViewChild} from '@angular/core';
import { ShopidHttpApiService } from '../services/shopid-http-api.service';
import { tap} from 'rxjs/operators';
import {CdkDragDrop} from '@angular/cdk/drag-drop';

import {
  CdkDrag,
  CdkDragStart,
  CdkDropList, CdkDropListGroup, CdkDragMove, CdkDragEnter,
  moveItemInArray
} from "@angular/cdk/drag-drop";
import {ViewportRuler} from "@angular/cdk/overlay";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @ViewChild(CdkDropListGroup) listGroup: CdkDropListGroup<CdkDropList>;
  @ViewChild(CdkDropList) placeholder: CdkDropList;

  public items;

  public target: CdkDropList;
  public targetIndex: number;
  public source: CdkDropList;
  public sourceIndex: number;
  public dragIndex: number;
  public activeContainer;

constructor(public api: ShopidHttpApiService,private viewportRuler: ViewportRuler) {
    this.target = null;
    this.source = null;
	}
  

   list;
 
 
 breakpoint: number = 3;
  onResize(event) {


    if (event.target.innerWidth < 200) {
      this.breakpoint = 1;
    }

    if (event.target.innerWidth >= 200 && event.target.innerWidth < 800) {
      this.breakpoint = 3;
    }

    if (event.target.innerWidth >= 800) {
      this.breakpoint = 4;
    }

  }
  
  
  
  ngOnInit(): void {
	
	var self = this;
	setTimeout(function() {
	
	  self.api.List({"latest":"true"},
	
	  tap({next: response=>{
		  

		  
		  self.items = response;
		  
	   }
	   
	  }));
	
		
	},1000);

	
  }

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ngAfterViewInit() {
    let phElement = this.placeholder.element.nativeElement;

    phElement.style.display = 'none';
    phElement.parentElement.removeChild(phElement);
  }



  dragMoved(e: CdkDragMove) {
    let point = this.getPointerPositionOnPage(e.event);

    this.listGroup._items.forEach(dropList => {
      if (__isInsideDropListClientRect(dropList, point.x, point.y)) {
        this.activeContainer = dropList;
        return;
      }
    });
	
	
	
  }

  dropListDropped(e) {
    if (!this.target)
      return;

    let phElement = this.placeholder.element.nativeElement;
    let parent = phElement.parentElement;

    phElement.style.display = 'none';

    parent.removeChild(phElement);
    parent.appendChild(phElement);
    parent.insertBefore(this.source.element.nativeElement, parent.children[this.sourceIndex]);

    this.target = null;
    this.source = null;
	
	
	/**/
		var x = {"elem":"","between":"","betweenAnd":""};
		var elemid = this.sourceIndex;
		x.elem = this.items[elemid];
		
	/**/
	

    if (this.sourceIndex != this.targetIndex)
      moveItemInArray(this.items, this.sourceIndex, this.targetIndex);
  

  
var between = this.targetIndex-1;
		
		var betweenAnd = this.targetIndex+1;
		
		//alert("move "+elemid+" between "+between+" & "+betweenAnd);
		

		
		
		
		
		
		

		
		x.between = this.items[between];
		
		x.betweenAnd = this.items[betweenAnd];
	
	/*this.api.SaveSort(x,
	
	  tap({next: response=>{
		  
		  
	   }
	   
	  }));
	 */
	  
	
  }

  dropListEnterPredicate = (drag: CdkDrag, drop: CdkDropList) => {
    if (drop == this.placeholder)
      return true;

    if (drop != this.activeContainer)
      return false;

    let phElement = this.placeholder.element.nativeElement;
    let sourceElement = drag.dropContainer.element.nativeElement;
    let dropElement = drop.element.nativeElement;

    let dragIndex = __indexOf(dropElement.parentElement.children, (this.source ? phElement : sourceElement));
    let dropIndex = __indexOf(dropElement.parentElement.children, dropElement);

    if (!this.source) {
      this.sourceIndex = dragIndex;
      this.source = drag.dropContainer;

      phElement.style.width = sourceElement.clientWidth + 'px';
      phElement.style.height = sourceElement.clientHeight + 'px';
      
      sourceElement.parentElement.removeChild(sourceElement);
    }

    this.targetIndex = dropIndex;
    this.target = drop;

    phElement.style.display = '';
    dropElement.parentElement.insertBefore(phElement, (dropIndex > dragIndex 
      ? dropElement.nextSibling : dropElement));

    this.placeholder.enter(drag, drag.element.nativeElement.offsetLeft, drag.element.nativeElement.offsetTop);
    return false;
  }
  
  /** Determines the point of the page that was touched by the user. */
  getPointerPositionOnPage(event: MouseEvent | TouchEvent) {
    // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
    const point = __isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
        const scrollPosition = this.viewportRuler.getViewportScrollPosition();

        return {
            x: point.pageX - scrollPosition.left,
            y: point.pageY - scrollPosition.top
        };
    }
}

function __indexOf(collection, node) {
  return Array.prototype.indexOf.call(collection, node);
};

/** Determines whether an event is a touch event. */
function __isTouchEvent(event: MouseEvent | TouchEvent): event is TouchEvent {
  return event.type.startsWith('touch');
}

function __isInsideDropListClientRect(dropList: CdkDropList, x: number, y: number) {
  const {top, bottom, left, right} = dropList.element.nativeElement.getBoundingClientRect();
  return y >= top && y <= bottom && x >= left && x <= right; 
}
