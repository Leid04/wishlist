import { Component, Input } from '@angular/core';
import { WishItem } from '../shared/models/WishItem';
import { WishListItemComponent } from './wish-list-item';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [WishListItemComponent],
  template: `
    @if (wishes.length !== 0) {
      <ul class="wish-list">
        @for (wish of wishes; track wish.wishId) {
          <wish-list-item [wish]="wish" />
        }
      </ul>
    }@else { <p>No items in the cart.</p> }
  `,
  styles: ` .wish-list{ list-style: none; padding: 0; } `
  
})
export class WishListComponent {
  @Input() wishes : WishItem[] = [];
}
