import { Component } from '@angular/core';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs = [
    { question: 'What services do you offer?', answer: 'We offer marketing, software development, IT hardware, and cloud services.', open: false },
    { question: 'How can I get a quote?', answer: 'Contact us via email or phone for a customized quote.', open: false },
    { question: 'Do you support international clients?', answer: 'Yes, we work with clients globally.', open: false }
  ];

  toggle(i: number) {
    this.faqs[i].open = !this.faqs[i].open;
  }
}