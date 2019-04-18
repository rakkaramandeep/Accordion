import { Component, Input, Output, HostBinding, EventEmitter, OnInit } from '@angular/core';
import { animation, trigger, state, transition, animate, style, group, query, useAnimation, stagger } from '@angular/animations';

@Component({
  selector: 'app-accordion-section',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css'],
  animations: [  // Animation for Accordian section 
    trigger('accordionItemContentAnimation',[
      state('isShow', style({height: '*', padding:'20px'})),
      state('isHide', style({height: 0, padding: '0px 20px'})),
      transition('isShow <=> isHide', group([animate('500ms')])), //transition for accordian open and close      
    ])
  ]
})
export class AccordionSectionComponent implements OnInit {  
  hideVal: string = 'isHide';
  @Input() item: string;
  // Event Emitter for Toggle click
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  ngOnInit() {
  }
  public accordiontoggle() {  
    this.toggle.emit(this)  
  }
}