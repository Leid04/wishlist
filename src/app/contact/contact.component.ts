import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-5">
        <form class="container p-5">
            <div class="mb-3">
                <label class="form-label">Your name</label>
                <input type="text" class="form-control" [formControl]="senderNameControl">
            </div>
            <div class="mb-3">
                <label class="form-label">Your email address</label>
                <input type="email" class="form-control" [formControl]="senderEmailControl">
            </div>
            <div class="mb-3">
                <label class="form-label">Message</label>
                <textarea class="form-control" rows="3" [formControl]="senderMessageControl"></textarea>
            </div>
            <div class="mb-3">
                <button type="submit" class="btn btn-primary" (click)="$event.preventDefault(); submitForm()">
                  Send Message
                </button>
            </div>
        </form>
      </div>
    </div>
  </div>
  `,
})
export class ContactComponent {
  senderNameControl = new FormControl('');
  senderEmailControl = new FormControl('');
  senderMessageControl = new FormControl('');

  submitForm() {
    if (this.senderNameControl.dirty) {
      alert('you changed the name field');
    }
  }
}
