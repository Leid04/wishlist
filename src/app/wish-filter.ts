import { Component, Output, EventEmitter, OnInit, Input} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { WishItem } from '../shared/models/WishItem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
]
@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="col-sm-2">
      <select 
        class="form-select"
        [(ngModel)]="listFilter"
        (ngModelChange)="updateFilter($event)"
      >
        <option value="0">All</option>
        <option value="1">Unfulfilled</option>
        <option value="2">Fulfilled</option>
      </select>
    </div>
    `,
  styles: ``
})
export class WishFilterComponent implements OnInit{
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();
  
  ngOnInit(): void { this.updateFilter('0'); }

  listFilter : any = '0';
  updateFilter(value : any){
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
}