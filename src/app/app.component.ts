import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-skillup';
  bgColorClass: string | undefined;

  updateBackgroundColor(url: string) {
    if (url.includes('/home')) {
      this.bgColorClass = 'background-home';
    } else if (url.includes('/about')) {
      this.bgColorClass = 'background-about';
    } else if (url.includes('/product')) {
      this.bgColorClass = 'background-product'; // Set background color for the product route
    } else {
      this.bgColorClass = ''; // Clear class if no match
    }
  }
}
