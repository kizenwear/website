import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsService } from '../../services/cms.service';
import { ProductCarouselComponent } from '../../components/product-carousel/product-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  sections: any[] = [];
  products: any[] = [];

  constructor(private cmsService: CmsService) {}

  ngOnInit() {
    this.cmsService.getSections().subscribe(data => this.sections = data);
    this.cmsService.getProducts().subscribe(data => this.products = data);
  }

  getHeroSection() {
    return this.sections.find(s => s.type === 'hero');
  }

  getFeaturedSection() {
    return this.sections.find(s => s.type === 'featured');
  }
}
