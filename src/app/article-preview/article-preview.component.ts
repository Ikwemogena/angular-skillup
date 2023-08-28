import { Component } from '@angular/core';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent {
  isContainerVisible = true;

  toggleContainer() {
    this.isContainerVisible = !this.isContainerVisible;
  }
}
