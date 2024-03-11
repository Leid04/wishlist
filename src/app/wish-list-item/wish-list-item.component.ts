import { Component, EventEmitter, Input, Output } from '@angular/core';
import {NgClass} from '@angular/common';
import events from './../../shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [NgClass],
  template: `
    <li class="d-flex justify-content-between">
      <div class="form-check">
          <label class="form-ckeck-label" [ngClass]="cssClasses">
            <input 
              type="checkbox" 
              class="checkbox"
              [checked] = "fullfilled"
              (click)="toggleFullfilled()"
            >{{wishText}}
          </label>
      </div>
      <div>
        <button type="button" class="btn-close" (click)="removeWish()" ></button>
      </div>
    </li>
  `,
  styles: ` .strikeout{ text-decoration: line-through; } `
})
export class WishListItemComponent {
  @Input() wishText! : string;
  @Input() fullfilled! : boolean;
  @Output() fullfilledChange = new EventEmitter<boolean>();

  get cssClasses(){  return {'strikeout text-muted': this.fullfilled} }

  removeWish(){
    events.emit('removeWish', this.wishText);
  }


  toggleFullfilled(){ 
    this.fullfilled = !this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled);
  }
}
