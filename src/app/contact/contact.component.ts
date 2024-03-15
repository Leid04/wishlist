import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { createInvalidDomainVal } from './InvalidDomail';

const invalidDomain = createInvalidDomainVal(['gmail.com', 'yahoo.com']);

@Component({
  selector: 'app-contact',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-5">
        <form class="container p-5" [formGroup]="contactForm" (ngSubmit)="$event.preventDefault(); submitForm()">
            <div class="mb-3">
                <label class="form-label">Your name</label>
                <input type="text" class="form-control" formControlName="senderName">
                @if (contactForm.get('senderName')?.invalid && 
                    (contactForm.get('senderName')?.dirty || contactForm.get('senderName')?.touched)) {
                  <div>
                    <small class="text-danger"
                      *ngIf="contactForm.get('senderName')?.hasError('required')"  
                    >This field is required</small>
                  </div>
                }
            </div>
            <div class="mb-3">
                <label class="form-label">Your email address</label>
                <input type="email" class="form-control" formControlName="senderEmail">
                @if (contactForm.get('senderEmail')?.invalid && 
                    (contactForm.get('senderEmail')?.dirty || contactForm.get('senderEmail')?.touched)) {
                  <div>
                    <small class="text-danger"
                      *ngIf="contactForm.get('senderEmail')?.hasError('required')"  
                    >This field is required</small>

                    <small class="text-danger"
                      *ngIf="contactForm.get('senderEmail')?.hasError('email')"  
                    >Plese enter your email address</small>

                    <small class="text-danger"
                      *ngIf="contactForm.get('senderEmail')?.hasError('invalidDomain')"  
                    >The email provider is not allowed.</small>
                  </div>
                }
            </div>
            <div class="mb-3">
                <label class="form-label">Message</label>
                <textarea class="form-control" rows="3" formControlName="senderMessage"></textarea>
                @if (contactForm.get('senderMessage')?.invalid && 
                    (contactForm.get('senderMessage')?.dirty || contactForm.get('senderMessage')?.touched)) {
                  <div>
                    <small class="text-danger"
                      *ngIf="contactForm.get('senderMessage')?.hasError('required')"  
                    >This field is required</small>

                    <small class="text-danger"
                      *ngIf="contactForm.get('senderMessage')?.hasError('minlength')"  
                    >The message has to be at least 10 characters</small>
                  </div>
                }
            </div>
            <div class="mb-3">
                <button type="submit" class="btn btn-primary" [disabled]="contactForm.invalid">
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

  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email, invalidDomain]),
    senderMessage: new FormControl('', [Validators.required, Validators.minLength(10)])
  })


  submitForm() { }
}
