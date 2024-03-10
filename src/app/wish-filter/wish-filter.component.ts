import { Component, Output, EventEmitter, OnInit} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { WishItem } from '../../shared/models/WishItem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
]

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styles: ``
})
export class WishFilterComponent implements OnInit{
  ngOnInit(): void {
    this.changeFilter(filters[0]);
  }
  listFilter : any = '0';
  @Output() filter = new EventEmitter<any>();
  changeFilter(value : any){
    this.filter.emit(filters[value]);
  }
}
