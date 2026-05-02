import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Uses relative path because Azure Static Web Apps automatically routes /api to the backend
  private baseUrl = '/api';

  constructor(private http: HttpClient) { }

  createOrder(amount: number, currency: string = 'INR'): Observable<any> {
    return this.http.post(`${this.baseUrl}/create-order`, { amount, currency });
  }

  verifyPayment(paymentDetails: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/verify-payment`, paymentDetails);
  }
}
