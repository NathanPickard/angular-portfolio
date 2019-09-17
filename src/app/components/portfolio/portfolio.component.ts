import { Component, OnInit } from '@angular/core';

import { PortfolioService } from 'src/app/services/portfolio.service';
import { Portfolio } from 'src/app/services/portfolio.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  selectedType: 'all' | 'Angular' | 'React' | 'Vue' = 'all';

  rooms = ['Room 1', 'Living Room'];

  portfolios: Portfolio[];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioService.get().subscribe(data => {
      this.portfolios = data;
    });
  }

}
