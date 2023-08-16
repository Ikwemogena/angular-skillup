import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-thank-you-container',
  templateUrl: './thank-you-container.component.html',
  styleUrls: ['./thank-you-container.component.css'],
})
export class ThankYouContainerComponent {
  @Input() selectedRating: number = 1;

  @Output() rateAgainClicked: EventEmitter<void> = new EventEmitter<void>();

  rateAgain() {
    // Emit the event to let the parent component know that the "Rate Again" button was clicked
    this.rateAgainClicked.emit();
  }

  // rateAgain() {
  //   this.selectedRating = 1;
  //   // Add your rate again logic here
  //   // Hide the thank you container and show the rating container
  // }
}
