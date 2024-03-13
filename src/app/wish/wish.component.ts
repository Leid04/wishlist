import { Component, inject } from '@angular/core';
import { WishItem } from '../../shared/models/WishItem';
import { EventService } from '../../shared/services/EventService';

@Component({
  selector: 'app-wish',
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
export class WishComponent {
  items : WishItem[] = [
    new WishItem(1, 'To learn angular'),
    new WishItem(2, 'Get coffee', true),
    new WishItem(3, 'Find grass that cuts itself'),
  ];
  filter: any;
  events = inject(EventService);

  constructor(){//remove wish
    this.events = inject(EventService);//4.3 using inject function
    this.events.listen('removeWish', (wish: any) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }
}
