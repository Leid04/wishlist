import { Component, Output, EventEmitter} from '@angular/core';
import { WishItem } from '../../shared/models/WishItem';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'add-wish-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form class="row mt-3 gx-3 gy-2 align-items-center justify-content-center">
        <div class="col-sm-6">
            <label class="visually-hidden" for="specificSizeInputName">Wish</label>
            <input type="text" name="new-wish-text" class="form-control" [(ngModel)]="newWishText">
        </div>
        <div class="col-auto">
            <button 
            type="submit" 
            class="btn btn-primary"
            (click)="$event.preventDefault(); addNewWish() "
            >Add Wish</button>
        </div>
    </form>
  `,
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<WishItem>();
  newWishText = '';
  addNewWish(){
    this.addWish.emit(new WishItem(4, this.newWishText));
    this.newWishText='';
  }
}