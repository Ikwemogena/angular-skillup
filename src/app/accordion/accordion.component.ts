import { Component } from '@angular/core';
import { FAQS } from '../core/constants/faq.constants';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {

  faqItems = FAQS;

  answerStates: boolean[] = Array(this.faqItems.length).fill(false);

  openClose(index: number): void {
    this.answerStates[index] = !this.answerStates[index];
  }
}
