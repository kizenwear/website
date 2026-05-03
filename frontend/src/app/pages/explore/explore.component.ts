import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CmsService } from '../../services/cms.service';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent implements OnInit {
  lookbookItems: any[] = [];
  brandData: any = null;

  constructor(private cmsService: CmsService, private http: HttpClient) {}

  ngOnInit() {
    this.cmsService.getLookbook().subscribe(data => this.lookbookItems = data);
    
    // Fetch data from the Spring Boot backend
    this.http.get('http://localhost:8080/api/message').subscribe({
      next: (data) => this.brandData = data,
      error: (err) => console.error('Failed to fetch brand data from backend', err)
    });
  }
}
