import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      icon: 'fa-chart-line',
      title: 'Digital Marketing',
      desc: 'Boost your online presence with our data-driven digital marketing strategies. We specialize in SEO, PPC campaigns, content marketing, and social media management to drive targeted traffic and increase conversions.',
      color: '#2563eb'
    },
    {
      icon: 'fa-paint-brush',
      title: 'Brand Strategy',
      desc: 'Establish a powerful brand identity that resonates with your audience. Our branding experts create compelling visual identities, messaging frameworks, and brand guidelines that help you stand out in the marketplace.',
      color: '#8b5cf6'
    },
    {
      icon: 'fa-code',
      title: 'Web Development',
      desc: 'Get a custom website or web application that perfectly aligns with your business goals. Our development team builds responsive, user-friendly, and high-performing digital solutions using the latest technologies.',
      color: '#ec4899'
    },
    {
      icon: 'fa-mobile-alt',
      title: 'Mobile Applications',
      desc: 'Extend your digital reach with native and cross-platform mobile applications. We develop intuitive, feature-rich apps for iOS and Android that provide seamless user experiences and drive engagement.',
      color: '#f59e0b'
    },
    {
      icon: 'fa-cloud',
      title: 'Cloud Solutions',
      desc: 'Leverage the power of cloud computing for your business. We provide cloud migration, infrastructure setup, and management services that enhance scalability, security, and operational efficiency.',
      color: '#10b981'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Cybersecurity',
      desc: 'Protect your digital assets with our comprehensive cybersecurity services. We implement robust security measures, conduct vulnerability assessments, and provide ongoing monitoring to safeguard your business.',
      color: '#ef4444'
    }
  ];
}