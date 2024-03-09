import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/WishItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
}
