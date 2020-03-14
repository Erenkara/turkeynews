import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articles$: Observable<any>;

  constructor(private newsapi: NewsService) { }

  ngOnInit() {
    // technology news articles
    this.articles$ = this.newsapi.getTopHeadlines();
  }
}


