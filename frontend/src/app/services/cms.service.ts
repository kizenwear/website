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
}
