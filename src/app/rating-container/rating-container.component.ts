import { Component } from '@angular/core';

@Component({
  selector: 'app-rating-container',
  templateUrl: './rating-container.component.html',
  styleUrls: ['./rating-container.component.css'],
})
export class RatingContainerComponent {
  selectedRating: number = 1;
  ratingSubmitted: boolean = false;

  setRating(rating: number) {
    this.selectedRating = rating;
  }

  submitRating() {
    // Here you can add your logic to handle the submission
    // For example, you might want to send the selected rating to a server
    // and then update the UI accordingly.

    // For now, let's simulate a submission and show the thank you state:
    this.ratingSubmitted = true;
  }

  resetRating() {
    // This method will be called when the "Rate Again" button is clicked
    this.ratingSubmitted = false;
    this.selectedRating = 1;
  }
}
