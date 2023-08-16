import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.css'],
})
export class NftComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe((urlSegments) => {
      if (urlSegments[0]?.path === '/nft') {
        document.body.style.backgroundColor = 'hsl(217, 54%, 11%)';
      } else {
        document.body.style.backgroundColor = 'default-color-here';
      }
    });
  }
}
