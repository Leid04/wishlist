import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/WishItem';
import { WishListComponent } from './wish-list';
import { AddWishFormComponent } from './add-wish-form';
import { WishFilterComponent } from './wish-filter';
import events from './../shared/services/EventService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent],
  template: `
    <div class="container">
      <add-wish-form (addWish) = "items.push($event)" />

      <div class="row mt-3"> <wish-filter [(filter)]="filter" />          </div>
      <div class="row mt-3"> 
        <div class="col-sm-4"> <wish-list [wishes]="items.filter(filter)" /></div> 
      </div>  
    </div>
  `,
  styles: ` .wish-list{ list-style: none; }  `
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem(1, 'To learn angular'),
    new WishItem(2, 'Get coffee', true),
    new WishItem(3, 'Find grass that cuts itself'),
  ];
  filter: any;

  constructor(){
    events.listen('removeWish', (wish: any) => {
      //remove wish
    });
  }

}