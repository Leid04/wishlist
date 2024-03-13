import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WishListComponent } from './wish-list';
import { AddWishFormComponent } from './add-wish-form';
import { WishFilterComponent } from './wish-filter';
import { WishListItemComponent } from './wish-list-item';
import { WishComponent } from './wish.component';

@NgModule({
  declarations: [
    WishListComponent, 
    AddWishFormComponent,
    WishFilterComponent,
    WishListItemComponent,
    WishComponent
  ],
  imports: [ CommonModule, FormsModule, ],
  exports: [
    WishComponent
  ]
})
export class WishModule { }