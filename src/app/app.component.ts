import { Component } from '@angular/core';
import { WishModule } from './wish/wish.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WishModule],
  template: `<app-wish />`,
  styles: ``
})
export class AppComponent { }