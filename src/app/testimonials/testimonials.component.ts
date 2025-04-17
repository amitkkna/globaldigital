import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials = [
    {
      text: "Global Digital Connect transformed our online presence completely. Their team delivered a stunning website and implemented a digital marketing strategy that increased our leads by 150% in just three months. Their expertise and dedication to our success were evident throughout the project.",
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechSolutions Inc.",
      image: "assets/images/testimonial-1.png"
    },
    {
      text: "Working with Global Digital Connect was a game-changer for our business. Their mobile app development team created an intuitive, feature-rich application that our customers love. The app has significantly improved our customer engagement and streamlined our operations.",
      name: "Michael Chen",
      position: "CEO",
      company: "InnovateTech",
      image: "assets/images/testimonial-2.png"
    },
    {
      text: "The team at Global Digital Connect provided exceptional service from start to finish. Their cloud migration solution was tailored perfectly to our needs, resulting in improved performance, enhanced security, and significant cost savings. I highly recommend their services.",
      name: "Emily Rodriguez",
      position: "CTO",
      company: "DataSphere",
      image: "assets/images/testimonial-3.png"
    }
  ];
}
