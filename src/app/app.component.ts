import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/WishItem';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent],
  templateUrl: './app.component.html',
  styles: ` .wish-list{ list-style: none; }  `
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem(1, 'To learn angular'),
    new WishItem(2, 'Get coffee', true),
    new WishItem(3, 'Find grass that cuts itself'),
  ];
  filter: any = () => {};
}