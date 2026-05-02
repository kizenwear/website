import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-carousel.component.html',
  styleUrl: './product-carousel.component.css'
})
export class ProductCarouselComponent implements OnInit {
  @Input() images: string[] = [];
  currentIndex: number = 0;

  ngOnInit() {}

  get currentImage(): string {
    return this.images && this.images.length > 0 ? this.images[this.currentIndex] : '';
  }

  selectImage(index: number) {
    this.currentIndex = index;
  }

  nextImage() {
    if (this.images && this.images.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
  }

  prevImage() {
    if (this.images && this.images.length > 0) {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  }
}
