import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Kizenwear Retail Site';

  products = [
    {
      name: 'Premium Apparel',
      description: 'Strength, Style, and Perfection in Every Build. T-shirts, Hoodies & Festive Wear.',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80',
      tag: 'LuxePrint'
    },
    {
      name: 'Infinity Mugs',
      description: 'Full-color, vibrant, and lasting impressions on every sip.',
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80',
      tag: 'Best Seller'
    },
    {
      name: 'Premium Keychains',
      description: 'Precision-cut, waterproof, custom-shaped signature accessories.',
      image: 'https://images.unsplash.com/photo-1605809189283-e02fb8605273?auto=format&fit=crop&w=800&q=80',
      tag: 'Accessories'
    },
    {
      name: 'Signature Magnets',
      description: 'High-quality premium magnetic art for fridges, whiteboards, or lockers.',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
      tag: 'Decor'
    },
    {
      name: 'Aesthetic Stickers',
      description: 'Waterproof, durable expression for laptops, bottles, and gear.',
      image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=800&q=80',
      tag: 'Trending'
    },
    {
      name: 'Professional Diaries',
      description: 'Aesthetic/To-do and professional minimalist planners to upgrade your vibe.',
      image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=800&q=80',
      tag: 'Lifestyle'
    }
  ];
}
