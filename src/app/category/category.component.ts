import { DataTransferService } from './../services/data-transfer.service';
import { CategoryService } from '../services/category.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  categoryName: string;
  categories: Observable<any>;
  alive: boolean;

  constructor(private data: DataTransferService, private categoryNews: CategoryService, private router: Router) { 
        // force route reload whenever params change;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
         this.router.navigated = false;
         window.scrollTo(0, 0);
      }
  });

}
  ngOnInit() {
    this.data.currentMessage.subscribe(categoryName => this.categoryName = categoryName)
    this.categories = this.categoryNews.getCategoryNews(this.categoryName);
  }
}


