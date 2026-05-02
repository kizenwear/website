import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  onSubmit(event: Event) {
    event.preventDefault();
    alert('Message sent! Our team will get back to you shortly.');
  }
}
