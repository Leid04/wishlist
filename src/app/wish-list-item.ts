import { Component, EventEmitter, Input, Output } from '@angular/core';
import {NgClass} from '@angular/common';
import events from '../shared/services/EventService';
import { WishItem } from '../shared/models/WishItem';

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
              [checked] = "wish.isComplete"
              (click)="toggleFullfilled()"
            >{{wish.wishText}}
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
  @Input() wish! : WishItem;

  get cssClasses(){  return {'strikeout text-muted': this.wish.isComplete} }

  removeWish(){ events.emit('removeWish', this.wish); }
  toggleFullfilled(){  this.wish.isComplete = !this.wish.isComplete; }
}
