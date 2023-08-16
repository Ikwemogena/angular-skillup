import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css'],
})
export class OrderSummaryComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe((urlSegments) => {
      if (urlSegments[0]?.path === 'order') {
        this.setBodyBackgroundImage();
      } else {
        document.body.style.backgroundColor = '';
      }
    });
  }
  ngOnDestroy(): void {
    this.resetBodyBackground();
  }

  private setBodyBackgroundImage(): void {
    // Use CSS classes or Angular Renderer to handle DOM manipulation
    document.body.style.backgroundImage =
      'url(https://www.digitshack.com/codepen/mentor1/pattern-background-desktop.svg)';

    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundColor = 'hsl(225, 100%, 94%)';
    document.body.style.position = 'relative';
    document.body.style.fontSize = '16px';
    document.body.style.fontFamily = "'Red Hat Display', sans-serif";
    document.body.style.minHeight = '100vh';
  }

  private resetBodyBackground(): void {
    document.body.style.backgroundImage = '';
    document.body.style.backgroundColor = '';
  }
}

