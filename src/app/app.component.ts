import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/WishItem';
import { WishListComponent } from './wish-list/wish-list.component';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
]
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, WishListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem(1, 'To learn angular'),
    new WishItem(2, 'Get coffee', true),
    new WishItem(3, 'Find grass that cuts itself'),
  ];

  title = 'wishlist';
  newWishText = '';
  listFilter : any = '0';
  
  get visibleItems() : WishItem[] {
    return this.items.filter(filters[this.listFilter]);
  }
  
  addNewWish(){
    this.items.push(new WishItem(3, this.newWishText));
    this.newWishText='';
  }
  
}
