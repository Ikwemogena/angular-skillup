import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe((urlSegments) => {
      if (urlSegments[0]?.path === 'results') {
        document.body.style.backgroundColor = '';
      } else {
        document.body.style.backgroundColor = 'default-color-here';
      }
    });
  }
}