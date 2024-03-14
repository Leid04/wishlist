import { Component } from '@angular/core';
import { ContactModule } from './contact/contact.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactModule],
  template: `<app-contact></app-contact>`, //`<app-wish />
})
export class AppComponent { }