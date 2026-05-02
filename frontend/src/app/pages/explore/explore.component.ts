import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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

  constructor(private cmsService: CmsService) {}

  ngOnInit() {
    this.cmsService.getLookbook().subscribe(data => this.lookbookItems = data);
  }
}
