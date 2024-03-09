import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/WishItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
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
  listFilter : string = '0';
  visibleItems: WishItem[] = this.items;
  
  toggleItem(item : WishItem){ //Para ver todos los parametros del evento
    item.isComplete = !item.isComplete;
    alert(item);
  }
  addNewWish(){
    this.items.push(new WishItem(3, this.newWishText));
    this.newWishText='';
  }
  
  filterChanged(value: any){ 
    switch(value){
      case '0': this.visibleItems = this.items; break;
      case '1': this.visibleItems = this.items.filter(item => !item.isComplete); break;
      case '2': this.visibleItems = this.items.filter(item => item.isComplete);  break;
    }
    alert(this.visibleItems);  
  }
}
