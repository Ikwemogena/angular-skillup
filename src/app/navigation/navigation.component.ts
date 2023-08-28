import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isMobileNavOpen: boolean = false;

  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

}
