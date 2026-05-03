import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Kizenwear Retail Site';
  connectionStatus = 'Waiting to test connection...';

  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  testBackendConnection() {
    this.connectionStatus = 'Testing backend...';
    this.apiService.createOrder(100).subscribe({
      next: (res) => {
        this.connectionStatus = `Success: Backend reached!`;
        console.log(res);
      },
      error: (err) => {
        this.connectionStatus = `Error connecting to backend: ${err.message}`;
      }
    });
  }
}

