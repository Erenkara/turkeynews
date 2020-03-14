import { DataTransferService } from './../services/data-transfer.service';
import { CategoryService } from '../services/category.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit  {
  categoryName:string;
  categories: Observable<any>;

  constructor(private data: DataTransferService,  private categoryNews: CategoryService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(categoryName => this.categoryName = categoryName)
    console.log("category")
    console.log(this.categoryName)
    this.categories = this.categoryNews.getCategoryNews(this.categoryName);
  }
  
}


