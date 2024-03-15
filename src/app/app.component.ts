import { Component } from '@angular/core';
import { ContactModule } from './contact/contact.module';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="container">
      <nav class="mt-3">
        <ul class="nav nav-pills">
          <li class="nav-item"><a class="nav-link" routerLink="/" aria-current="page">Wish Component</a></li>
          <li class="nav-item"><a class="nav-link" routerLink="/first" routerLinkActive="active" aria-current="page">First Component</a></li>
          <li class="nav-item"><a class="nav-link" routerLink="/second" routerLinkActive="active" aria-current="page">Second Component</a></li>
          <li class="nav-item"><a class="nav-link" routerLink="/contact" routerLinkActive="active" aria-current="page">Contact Component</a></li>
        </ul>
      </nav>
    </div>
    <router-outlet></router-outlet><!-- The routed views render -->
  `,
  styles: ``
})
export class AppComponent { }