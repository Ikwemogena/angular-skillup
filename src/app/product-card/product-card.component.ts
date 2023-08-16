import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe((urlSegments) => {
      if (urlSegments[0]?.path === 'product') {
        document.body.style.backgroundColor = 'hsl(30, 38%, 92%)';
      } else {
        document.body.style.backgroundColor = 'default-color-here';
      }
    });
  }
}
