import { Component, Input } from '@angular/core';
import { WishItem } from '../../shared/models/WishItem';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [],
  template: `
    @if (wishes.length !== 0) {
      <ul class="wish-list">
        @for (item of wishes; track item.wishId; let idx = $index) {
          <li>
            <div class="form-check">
                <label class="form-ckeck-label">
                  <input 
                    type="checkbox" 
                    class="checkbox"
                    [checked] = "item.isComplete"
                    [attr.data-index] = idx
                    (click)="toggleItem(item)"
                  >{{item.wishText}}
                </label>
            </div>
          </li>
        }
      </ul>
    }@else { <p>No items in the cart.</p> }
  `,
  styles: ` .wish-list{ list-style: none; padding: 0; } `
  
})
export class WishListComponent {
  @Input() wishes : WishItem[] = [];
  toggleItem(item : WishItem){ //Para ver todos los parametros del evento
    item.isComplete = !item.isComplete;
  }
}
