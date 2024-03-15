import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12 error-container">
          <h1>404</h1>
          <p>Oops! Page not found.</p>
          <p><a href="/" class="btn btn-secondary">Go back to Home</a></p>
        </div>
      </div>
    </div>
  `,
  styles: `
    .error-container    { text-align: center; margin-top: 100px; }
    .error-container h1 { font-size: 10rem;   font-weight: bold; color: red; }
    .error-container p  { font-size: 2rem;    margin-top: 20px; }
    .error-container a  { color: yellow;      text-decoration: none; font-weight: bold; }  
  `
})
export class NotFoundComponent {}
