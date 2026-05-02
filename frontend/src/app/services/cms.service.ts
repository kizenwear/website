import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CmsService {
  // In the future, this will point to Contentful or Strapi
  // private cmsUrl = 'https://cdn.contentful.com/spaces/YOUR_SPACE_ID/environments/master/entries';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    // Mocking CMS API call by reading from local JSON
    return this.http.get<any[]>('/assets/products.json');
  }

  getProduct(slug: string): Observable<any> {
    return this.getProducts().pipe(
      map(products => products.find(p => p.slug === slug))
    );
  }

  getSections(): Observable<any[]> {
    // Mocking CMS Homepage Sections
    return of([
      {
        type: 'hero',
        title: 'Always Upgrading Your Vibe',
        subtitle: 'Continuous Improvement, Expressive Style. Premium customized goods.',
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1600&q=80'
      },
      {
        type: 'featured',
        title: 'Core Six Collection',
        subtitle: 'Our signature premium products',
        category: 'All'
      }
    ]);
  }

  getLookbook(): Observable<any[]> {
    // Mocking CMS Lookbook/Lifestyle Gallery
    return of([
      {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
        productSlug: 'luxeprint-premium-hoodie',
        title: 'Urban Comfort'
      },
      {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80',
        productSlug: 'luxeprint-premium-hoodie',
        title: 'Street Essentials'
      },
      {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1554162451-b0db43d4e7f3?auto=format&fit=crop&w=800&q=80',
        productSlug: 'infinity-mug',
        title: 'Morning Routine'
      },
      {
        id: 4,
        imageUrl: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
        productSlug: 'premium-precision-keychain',
        title: 'Accessories'
      },
      {
        id: 5,
        imageUrl: 'https://images.unsplash.com/photo-1550614000-4b95d4ed79ea?auto=format&fit=crop&w=800&q=80',
        productSlug: 'luxeprint-premium-hoodie',
        title: 'Late Night Drops'
      },
      {
        id: 6,
        imageUrl: 'https://images.unsplash.com/photo-1489987707023-afc82478163a?auto=format&fit=crop&w=800&q=80',
        productSlug: 'luxeprint-premium-hoodie',
        title: 'Vintage Feel'
      }
    ]);
  }
}
