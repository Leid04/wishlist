import { Component, Output, EventEmitter} from '@angular/core';
import { WishItem } from '../../shared/models/WishItem';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'add-wish-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-wish-form.component.html',
  styles: ``
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<WishItem>();
  newWishText = '';
  addNewWish(){
    this.addWish.emit(new WishItem(4, this.newWishText));
    this.newWishText='';
  }
}
