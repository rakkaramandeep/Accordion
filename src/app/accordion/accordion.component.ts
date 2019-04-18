import { Component, ContentChildren, QueryList, AfterContentInit, OnInit } from '@angular/core';
import { animation, trigger, state, transition, animate, style, group, query, useAnimation, stagger } from '@angular/animations';
import { AccordionSectionComponent } from '../accordion-item/accordion-item.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  animations: [
    trigger('accordionAnimation', [
      transition('* => *', [
        query('*', style({ opacity: 0 })),
        query('*', stagger('5ms', [animate('0.2s', style({ opacity: 1 }))]))
      ])
    ])  
  ]  
})
export class AccordionComponent implements OnInit, AfterContentInit {
  // get AccordionSectionComponent data through ContentChildren
  @ContentChildren(AccordionSectionComponent) children: QueryList<AccordionSectionComponent>;
  constructor() { }

  ngOnInit() {
  }
// Accordian section toggle click subscribe in the parent Componenet
  ngAfterContentInit() {
    this.children.toArray().forEach((item) => {
      item.toggle.subscribe(() => {
        this.itemToggle(item);
      });
    });
  }
  itemToggle(selectedItem: AccordionSectionComponent) {
    // Accordion logic  
    this.children.toArray().forEach(v =>{
      if(v['item']['name'] == selectedItem['item']['name']) {        
      v.hideVal = v.hideVal=='isShow'?'isHide':'isShow';
      }
      else {
        v.hideVal = 'isHide';
      }
    });  
  }

}