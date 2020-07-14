import { Component, EventEmitter, Input, OnInit, Output ,forwardRef } from '@angular/core';
import { ControlValueAccessor ,NG_VALUE_ACCESSOR ,NgModel} from '@angular/forms';
@Component({
  selector: 'app-edit-input',
  templateUrl: './edit-input.component.html',
  styleUrls: ['./edit-input.component.scss'],
  
  providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EditInputComponent),
            multi: true
        }
	]
		
})
export class EditInputComponent implements  ControlValueAccessor , OnInit {

  @Input() sss : NgModel;	
	
  @Input() data: any;
  
  
  
  @Output() focusOut: EventEmitter<any> = new EventEmitter<any>();
  

  
  editMode = false;
  constructor() {}
  
 value;

 ngOnInit() {
	 
	 
	 
 }

  onFocusOut() {
	  

    this.focusOut.emit(this.value);
    this.propagateChange(this.value);
  }
  
  
  writeValue(value:any) {
           this.value = value;
		  
        }

        registerOnChange(fn) {
			
            this.propagateChange = fn;
			
        }

        registerOnTouched(fn){
        }
		
	    private propagateChange = (_:any) => {};	
		
}
