import { Component, Input } from '@angular/core';
import { WishItem } from '../../shared/models/WishItem';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [],
  templateUrl: './wish-list.component.html',
  styles: ` .wish-list{ list-style: none; padding: 0; } `
  
})
export class WishListComponent {
  @Input() wishes : WishItem[] = [];
  toggleItem(item : WishItem){ //Para ver todos los parametros del evento
    item.isComplete = !item.isComplete;
    alert(item);
  }
}
